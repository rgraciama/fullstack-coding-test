import {Component, Input} from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { zip } from 'rxjs';

import {Product, CreateProductDTO, UpdateProductDTO} from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    title: '',
    description: '',
    imageUrl: ''
  };
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  typeProduct = ['animals', 'arch', 'nature', 'people', 'tech'];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {}


  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.productsService.getProduct(id)
      .subscribe(data => {
        this.toggleProductDetail();
        this.productChosen = data;
        this.statusDetail = 'success';
      }, errorMsg => {
        window.alert(errorMsg);
        this.statusDetail = 'error';
      })
  }

  readAndUpdate(id: string) {
    this.productsService.getProduct(id)
      .pipe(
        switchMap((product) => {
          return this.productsService.update({title: 'change'})
        })
      )
      .subscribe(data => {
        console.log(data)
      });

      this.productsService.fetchReadAndUpdate(id, {title: 'change'})
      .subscribe(response => {
        const read = response[0];
        const update = response[1];
      });
  }

  createNewProduct() {
    const stringTypeProduct = this.typeProduct[Math.floor(Math.random() * 5)];
    const idRandomProduct = Math.floor(Math.random() * 100)+1;
    const product: CreateProductDTO =  {
      title: stringTypeProduct + ' product ' + idRandomProduct,
      description: 'description about ' + stringTypeProduct + " " +idRandomProduct ,
      imageUrl: 'https://placeimg.com/640/480/' + stringTypeProduct,
    }
    this.productsService.create(product)
      .subscribe(data => {
        this.products.unshift(data);
      })
  }

  updateProduct() {
    const stringTypeProduct = this.typeProduct[Math.floor(Math.random() * 5)];
    const idRandomProduct = Math.floor(Math.random() * 100)+1;
    const changes: UpdateProductDTO = {
      title: 'Title changed '+idRandomProduct,
      description: 'Description changed '+idRandomProduct,
      imageUrl: 'https://placeimg.com/640/480/' + stringTypeProduct
    }
    this.productsService.update(changes)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
        this.products[productIndex] = data;
        this.toggleProductDetail();
      })
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id)
      .subscribe(() => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      })
  }


}

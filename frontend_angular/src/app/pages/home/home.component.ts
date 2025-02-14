import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts(10, 0)
      .subscribe(data => {
        this.products = data;
      });
  }
  loadMore() {
    this.productsService.getProductByPage(this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      })
  }
}

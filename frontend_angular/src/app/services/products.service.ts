import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {retry, catchError, map} from 'rxjs/operators';
import {throwError, zip} from 'rxjs';

import {Product, CreateProductDTO, UpdateProductDTO} from './../models/product.model';
import { checkTime } from './../interceptos/time.interceptor';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, {params, context: checkTime()})
      .pipe(
        retry(3),
        map(products => products.map(item=> {
          return {
            ...item
          }
        }))
      );
  }

  getProductByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    })
  }

  fetchReadAndUpdate(id: string, dto: UpdateProductDTO) {
    //get y update a la vez
    return zip(
      this.getProduct(id),
      this.update({title: 'Title changed product', description: "Description changed", imageUrl:"https://placeimg.com/640/480/animals"}),
    )
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.InternalServerError) {
            return throwError('Something is wrong in server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('Product do not exists');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('It is not allowed');
          }
          return throwError('Something goes wrong');
        })
      )
  }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(dto: UpdateProductDTO) {
    return this.http.put<Product>(this.apiUrl, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}

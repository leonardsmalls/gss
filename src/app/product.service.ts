import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }

  constructor(private messageService: MessageService) { }
}

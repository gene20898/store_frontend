import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Product[] = [];
  constructor() { }

  updateItem(product: Product): void {
    const amount = product.amount;
    const id = product.id;
    const findingItem = this.cart.find(item => {return item.id === id}) as Product;
    if(findingItem == undefined){
      this.cart.push(product);
    }
    else{
      if(amount == 0){
        this.cart = this.cart.filter(item => {return item.id != id})
        console.log("amount = 0");
      }
      else{
        findingItem.amount = amount;
        console.log("amount enter" + amount + " and: " + findingItem.amount);
      }
    }
    console.log(this.cart);
  }

  getCartItems(): Product[] {
    return this.cart;
  }
}

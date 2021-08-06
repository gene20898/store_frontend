import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.totalPrice();
  }

  amountChange(item: Product):void {
    this.cartService.updateItem(item);
    this.cart = this.cartService.getCartItems();
    this.totalPrice();
  }
  
  totalPrice():void {
    this.total = this.cart.reduce((total,item) => {return total + item.amount*item.price;}, 0);
    this.total = parseFloat(this.total.toFixed(2));
  }
  onSubmit(): void {
    this.router.navigate(['/confirm']);
  }
}

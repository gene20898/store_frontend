import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id: number = 1;
  product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params.id;
      }
    );

    this.productService.getProduct().subscribe(res => {
      this.product = res.find(item => item.id == this.id) as Product;
      this.product["amount"] = 1;
   });
  }

  addCart(): void{
    this.cartService.updateItem(this.product);
    alert("Added to cart!");
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConfirmationComponent,
    CartComponent,
    ProductItemComponent,
    HeaderComponent,
    ProductItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

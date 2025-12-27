import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './modules/product/product.module';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
   
  
   
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './Pages/loading/loading.component';
import { LoginComponent } from './Pages/login/login.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { ViewProductsComponent } from './Pages/view-products/view-products.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    LoginComponent,
    PrincipalComponent,
    ViewProductsComponent,
    AddProductComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

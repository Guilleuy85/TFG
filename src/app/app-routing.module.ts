import { ViewProductsComponent } from './Pages/view-products/view-products.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { LoadingComponent } from './Pages/loading/loading.component';
import { LoginComponent } from './Pages/login/login.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "add", component: AddProductComponent },
  { path: "view", component: ViewProductsComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

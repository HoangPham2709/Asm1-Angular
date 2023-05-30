import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'products', component: ListProductComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/update', component: ProductUpdateComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

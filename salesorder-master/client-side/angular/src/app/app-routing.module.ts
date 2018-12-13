import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSalesorderComponent } from './create-salesorder/create-salesorder.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    {path: 'salesorder', component: CreateSalesorderComponent},
    { path: 'add', component: CreateSalesorderComponent },
    { path: 'salesorder', component: SalesOrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

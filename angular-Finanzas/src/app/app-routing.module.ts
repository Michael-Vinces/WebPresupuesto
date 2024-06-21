import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/infoUsers/user/user.component';
import { ViewIncomeComponent } from './components/infoUsers/view-income/view-income.component';
import { ViewTransactionsComponent } from './components/infoUsers/view-transactions/view-transactions.component';
import { BankAccountComponent } from './components/infoUsers/bank-account/bank-account.component';
import { InicioComponent } from './components/reusable/inicio/inicio.component';
import { PageInitComponent } from './components/reusable/page-init/page-init.component';

const routes: Routes = [
  {path:"",redirectTo:"Home/Pagina_Principal",pathMatch:"full"},
  {path:"Home",redirectTo:"Home/Pagina_Principal",pathMatch:"full"},
  {path:"Home",component:InicioComponent,children:[
    
    {path:"Pagina_Principal",component:PageInitComponent},
    {path:"Usuario",component:UserComponent},
    {path:"Ingresos",component:ViewIncomeComponent},
    {path:"Transacciones",component:ViewTransactionsComponent},
    {path:"Cuentas_Bancarias",component:BankAccountComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

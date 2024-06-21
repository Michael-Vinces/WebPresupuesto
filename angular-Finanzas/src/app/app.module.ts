import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewIncomeComponent } from './components/infoUsers/view-income/view-income.component';
import { ViewTransactionsComponent } from './components/infoUsers/view-transactions/view-transactions.component';
import { UserComponent } from './components/infoUsers/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/reusable/footer/footer.component';
import { BankAccountComponent } from './components/infoUsers/bank-account/bank-account.component';
import { InicioComponent } from './components/reusable/inicio/inicio.component';
import { PageInitComponent } from './components/reusable/page-init/page-init.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewIncomeComponent,
    ViewTransactionsComponent,
    UserComponent,
    FooterComponent,
    BankAccountComponent,
    InicioComponent,
    PageInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

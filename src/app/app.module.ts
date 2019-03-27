import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractComponent } from './extract/extract.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyFormatter } from './utils/currencyFormatter';

@NgModule({
  declarations: [
    AppComponent,
    ExtractComponent,
    TransactionComponent,
    HeaderComponent,
    CurrencyFormatter
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrencyFormatter],
  bootstrap: [AppComponent]
})
export class AppModule { }

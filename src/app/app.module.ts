import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AddquoteComponent } from './quote/addquote/addquote.component';
import { QuoteslistComponent } from './quote/quoteslist/quoteslist.component';
import { SortPipe } from './quote/quoteslist/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AddquoteComponent,
    QuoteslistComponent,
    SortPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

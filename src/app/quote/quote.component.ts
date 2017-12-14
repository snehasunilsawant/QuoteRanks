import { Component, OnInit } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteList = [];
  quote = new Quote;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Inside Submit');
    console.log(this.quote);
    this.quoteList.push(this.quote);
    this.quote = new Quote;
  }
}

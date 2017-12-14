import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './../quote';

@Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {

  transform(quoteList: Array<Quote>, filter: string): Array<Quote> {
    let temp;
    for (let i = 0 ; i < quoteList.length ; i++) {
      for (let j = i + 1; j < quoteList.length ; j++) {
        if ( quoteList[j].vote > quoteList[i].vote ) {
          temp = quoteList[i].vote;
          quoteList[i].vote = quoteList[j].vote;
          quoteList[j].vote =  temp;
        }
      }
    }
      return quoteList;
  }

}

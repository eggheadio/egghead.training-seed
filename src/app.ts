import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

const body = $(document.body);
const output = $(`<div>Output</div>`);

Observable.from("Observables are lazy Push collections of multiple values".split(" "))
  .concatMap(word => Observable.of(word).delay(250))
  .repeat()
  .subscribe(word => body.html(word));


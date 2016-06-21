import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

const body = $(document.body);
const output = $(`<div>Output</div>`);

Observable.from("Observables are lazy push collections :)".split(" "))
  .concatMap(word => Observable.of(word).delay(500))
  .repeat()
  .subscribe(word => body.html(word));


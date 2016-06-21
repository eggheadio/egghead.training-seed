import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

const body = $(document.body);

Observable.interval(1000)
  .subscribe(count => body.html(`<div>${count}</div>`);

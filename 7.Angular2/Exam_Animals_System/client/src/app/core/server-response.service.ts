import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ServerResponseService {
  message = new Subject<string>();
  message$ = this.message.asObservable();
  color = new Subject<string>();
  color$ = this.color.asObservable();

  emitResponse(httpResponse) {
    if (httpResponse.success) {
      this.message.next(httpResponse.message);
      this.color.next('lightgreen');
    } else {
      const errors = httpResponse.errors;
      if (errors) {
        const keys = Object.keys(errors);

        if (keys.length > 0) {
          const firstKey = Object.keys(errors)[0];
          this.message.next(errors[firstKey]);
          this.color.next('lightcoral');
        }
      } else {
        this.message.next(httpResponse.message);
        this.color.next('lightcoral');
      }
    }

    //  Need to use arrow function to keep this. working
    setTimeout(() => {
      this.message.next('');
    }, 4000);
  }
}

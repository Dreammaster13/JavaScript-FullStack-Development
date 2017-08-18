import {Component} from '@angular/core';

import {ServerResponseService} from './server-response.service';

@Component({
  selector: 'app-message-handler',
  template: `<div *ngIf='message' [style.background-color]='color'>{{message}}</div>`,
  styles: [`
  div {
    padding: 10px;
    border-radius: 15px;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 10px auto;
    position: absolute;
    top: 10px;
    left: 20px;
  }
  `]
})

export class MessageHandlerComponent {
  message: string;
  color: string;

  constructor(private serverResponseService: ServerResponseService) {
    this.serverResponseService.message$
      .subscribe(message => {
        console.log(message);
        this.message = message;
      });

    this.serverResponseService.color$
      .subscribe(color => {
        this.color = color;
      });
  }
}

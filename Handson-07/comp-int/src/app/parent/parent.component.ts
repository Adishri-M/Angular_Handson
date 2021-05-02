import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  template: `
    <h1>Message: {{message}}</h1>
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  message:string = "";

  receiveMessage($event:string) {
    this.message = $event;
  }
}
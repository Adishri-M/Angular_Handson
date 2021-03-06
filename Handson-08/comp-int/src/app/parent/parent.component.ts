import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  template:`
    <h2> Parent Component : {{message}} </h2>
    <br>
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , OnDestroy{

  message : string = '';
  
  subscription : Subscription;

  constructor(private data : DataService) { }

  ngOnInit(){

    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  }

  ngOnDestroy(){

    this.subscription.unsubscribe();
    
  }

}

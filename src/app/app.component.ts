import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form></app-simple-form>
    <hr>
    <ul>
      <app-simple-form *ngFor="let message of mail.messages"
        [message]="message" >
      </app-simple-form>
    </ul>
    <hr>
    {{api}}
  </div>`
})
export class AppComponent {

  title = 'Let\'s get started!';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ){}
}

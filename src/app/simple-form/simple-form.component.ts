import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
   {{message}}
   <input #myInput type="text">
   <button (click)="onClick(myInput.value)">Click Me!</button>

</div>`,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(value){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}

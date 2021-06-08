import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios1',
  templateUrl: './ejercicios1.component.html',
  styleUrls: ['./ejercicios1.component.css']
})
export class Ejercicios1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

}

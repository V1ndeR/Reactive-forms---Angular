import { Component, OnInit } from '@angular/core';
import { hobby } from './form/form.component';

export interface Person {
  firstName: string,
  lastName: string,
  dateOfBirth: any,
  framework: any,
  frameworkVersion: any,
  email: string,
  hobbies: hobby[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }
}


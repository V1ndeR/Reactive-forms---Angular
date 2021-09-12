import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../app.component';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MyValidators } from './test.validator';

interface FrWork {
  value: string;
}

interface AngularV {
  value: string;
}

interface ReactV {
  value: string;
}

interface VueV {
  value: string;
}

export interface hobby {
  value: string;
  duration: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild(FormGroupDirective) myForm: { resetForm: () => void; };

  form: FormGroup

  frWork: FrWork[] = [
    {value: 'Angular'},
    {value: 'React'},
    {value: 'Vue'}
  ];

  angular: AngularV[] = [
    {value: '1.1.1'},
    {value: '1.2.1'},
    {value: '1.3.3'}
  ];

  react: ReactV[] = [
    {value: '2.1.2'},
    {value: '3.2.4'},
    {value: '4.3.1'}
  ];

  vue: VueV[] = [
    {value: '3.3.1'},
    {value: '1.2.1'},
    {value: '5.2.1'}
  ];


    firstName = ''
    lastName = ''
    dateOfBirth = ''
    framework = ''
    frameworkVersion = ''
    email = ''
    hobby = ''
    duration = ''
    hobbies: hobby[] = []

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], [MyValidators.uniqEmail]),
      firstname: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      lastname: new FormControl('',[Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      duration: new FormControl(''),
      hobby: new FormControl(''),
      framework: new FormControl('', [Validators.required]),
      frameworkVersion: new FormControl('', [Validators.required])
    })
  }

  showAngularVersion() {
      return !!this.framework && this.framework === 'Angular'
  }

  showReactVersion() {
    return !!this.framework && this.framework === 'React'
  }

  showVueVersion() {
    return !!this.framework && this.framework === 'Vue'
  }

  clearSelectedVersion() {
    this.frameworkVersion = ''
  }

  addHobby() {
      if (!!this.hobby && !!this.duration) {
        this.hobbies.push({value: this.hobby, duration: this.duration});
        this.hobby = this.duration = ''
      }
  }

  validateAddHobby() {
      return !!this.hobby && !!this.duration
  }

  validateCheck() {
      return this.form.status !== 'INVALID' && this.form.status !== 'PENDING'
  }

  private resetForm(): void {
      if (this.form) {
        this.myForm.resetForm()
      }
  }

  onAddUser() {
    const post: Person = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      framework: this.framework,
      frameworkVersion: this.frameworkVersion,
      email: this.email,
      hobbies: this.hobbies
    }
    console.log('New Person', post)
    this.firstName = this.lastName = this.dateOfBirth = this.email = ''
    this.hobbies = [];
    this.resetForm()
  }
}

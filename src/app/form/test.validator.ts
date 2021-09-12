import { Observable } from 'rxjs';

export class MyValidators {
  static uniqEmail (control: any): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'test@test.test') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 2000)
    })
  }
}



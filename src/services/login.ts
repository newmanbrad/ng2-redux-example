import { Injectable } from '@angular/core';
const localStorage = require('store');

@Injectable()
export class LoginService {
    // todo: build real api interaction here.
    public login(credintials: Object): Promise<any> {
      console.log(credintials);
        return new Promise((resolve, reject) => {
        let temp = {
            token: 1234,
            user: {
                firstName: 'First Name',
                lastName: 'Last Name',
                company: 'test',
                email: 'email@email.com'
            },
            hasError: false,
            isLoading: false
        };

        // localStorage.set('skill-mapper', temp);

        resolve(temp);
      });
    }
}

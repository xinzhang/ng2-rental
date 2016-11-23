import { Control } from '@angular/common';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {AuthService} from '../services/auth.service';

interface ValidationResult {
    [key: string]: boolean;    
}

@Injectable()
export class UsernameValidator {

    constructor(private authService: AuthService) { }
    
    startsWithNumber(control: Control): ValidationResult {
        var code = control.value.charAt(0);
        
        if (control.value != "" &&
            //((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))
            !isNaN(code)
        ) {
            return { "startsWithNumber": true };
        }

        return null;
    }

    usernameTaken(control: Control): Promise<ValidationResult> {
        console.log('username taken validation');
                                
        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
                
                if (control.value === "David") {
                    resolve({ "usernameTaken": true })
                } else {
                    resolve(null);
                };
            }, 1000);
        });
    }
    
     userNameValidator(control: Control) : Promise<ValidationResult> {
        
        return new Promise( (resolve, reject) => {          
            this.authService.checkUser(control.value)
                .then(data => {
                    var ret = data.json();

                    if (ret == '1') {
                        console.log('username taken');
                        resolve({ "usernameTaken": true });
                    }                        
                    else {
                        console.log('username is good');
                        resolve({ "usernameTaken": null });
                    }                        
                });
        });
    }

}
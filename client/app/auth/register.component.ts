import {Component, Output, EventEmitter} from '@angular/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from '@angular/common';

import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

import {UsernameValidator} from '../validators/usernameValidator';

@Component({
    templateUrl: 'app/auth/register.component.html',
    styleUrls: ['app/auth/register.component.css'],
    directives: [FORM_DIRECTIVES]
})

export class RegisterComponent {
    public userEmail: string = "";
    public password: string = "";
    public confirmPassword: string = "";

    public errorMessage: string = "";

    public username: Control;
    public pw: Control;
    public confirmpw: Control;
    public regForm: ControlGroup;

    constructor(private _authService: AuthService,
        private _usernameValidator: UsernameValidator,
        private _router: Router,
        private builder: FormBuilder) {
        this.username = new Control(
            "",
            Validators.compose([Validators.required, _usernameValidator.startsWithNumber]),
            _usernameValidator.usernameTaken
            //this.userNameValidator.bind(this)
        );

        this.pw = new Control(
            "",
            Validators.compose([Validators.required, Validators.minLength(3)])
        );
        
        this.confirmpw = new Control(
            "",
            Validators.compose([Validators.required, Validators.minLength(3)])
        );

        this.regForm = builder.group({
            username: this.username,
            pw: this.pw,
            confirmpw: this.confirmpw,
        }, {validator: this.matchingPasswords('pw', 'confirmpw')});

    }

    @Output() REGISTER_SUCCESS = new EventEmitter();

    register(): void {
        console.log('register ' + this.userEmail);

        this._authService.register({
            'email': this.userEmail,
            'password': this.password
        }).subscribe(
            data => {
                this._authService.setAuthorisedUserData(data);                
            },
            error => { this.errorMessage = <any>error } 
        )
        
        this._router.navigate(['Welcome']);
    }
   
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
            else {
                return null;
            }            
        }
    }

}

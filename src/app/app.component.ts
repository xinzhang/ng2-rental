import {Component, OnInit, ViewChild} from '@angular/core';
import {Routes, Router, Params} from '@angular/router'

import {AuthService} from './services/auth.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers:[
    AuthService
  ]
})
export class AppComponent {
    pageTitle: string = "this is the first app component.";
    q: string = "";

    constructor(public authService : AuthService,
                private _router: Router) {        
    }

    public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: "visible"
    };
    
    ngOnInit(): void {
        this.authService.CurrentUser = JSON.parse(sessionStorage.getItem('session-user'));                        
    }

    signout(): void {                
        this.authService.logout()
            .subscribe( data => {
                sessionStorage.removeItem('session-user');
                this.authService.CurrentUser = null;        
            })
    }

    onLoginSuccess(message: string): void {
        console.log(message);
    }
    
    search(): void {
        console.log('search ' + this.q);
        this._router.navigate(['/search', this.q]);         
    }
}

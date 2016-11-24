import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
    public searchText: string = "";
    
    constructor (){
    }
    
    search() : void {
        console.log('search: ' + this.searchText);
    }
}
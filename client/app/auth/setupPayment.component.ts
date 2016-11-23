import {Component, Output, EventEmitter} from '@angular/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from '@angular/common';

import {Router} from '@angular/router';

import {PaymentService} from '../services/payment.service';

@Component({
    templateUrl: 'app/auth/setupPayment.component.html',
    styleUrls: ['app/auth/setupPayment.component.css'],
    directives: [FORM_DIRECTIVES]
})

export class SetupPaymentComponent {
    public currentPage: number = 1;
    public pageTitle : string = "Setup your payment";
    public payment_result: string = "";
    public card = {
        amount: 1889,
        name: "",
        cvv: "",
        number:  "",
        expiry_month:  "",
        expiry_year:  "",
                
        address_line1: '',
        address_line2: '',
        address_city: '',
        address_postcode: '',
        address_state: '',
        address_country: 'AU'
         
    }
    
    months = ['01','02','03','04','05', '06', '07', '08', '09', '10', '11', '12'];
    years = ['2016','2017','2018','2019','2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    states = ['NSW', 'VIC', 'QLD', 'ACT', 'TAS', 'WA', 'SA', 'NT'];
    
    constructor(private paymentService : PaymentService, 
                private _router: Router){
                    
                }

    next(): void {
        this.currentPage++;
    }
    
    prev(): void {
        this.currentPage--;
    }
    
    paynow(): void {        
        this.paymentService.process(this.card)
            .subscribe(data => {
                this.payment_result = data;
            },
            error => {
                
            });        
    }
    
}

System.register(['@angular/core', '@angular/common', '@angular/router', '../services/payment.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, payment_service_1;
    var SetupPaymentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            }],
        execute: function() {
            SetupPaymentComponent = (function () {
                function SetupPaymentComponent(paymentService, _router) {
                    this.paymentService = paymentService;
                    this._router = _router;
                    this.currentPage = 1;
                    this.pageTitle = "Setup your payment";
                    this.payment_result = "";
                    this.card = {
                        amount: 1889,
                        name: "",
                        cvv: "",
                        number: "",
                        expiry_month: "",
                        expiry_year: "",
                        address_line1: '',
                        address_line2: '',
                        address_city: '',
                        address_postcode: '',
                        address_state: '',
                        address_country: 'AU'
                    };
                    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                    this.years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
                    this.states = ['NSW', 'VIC', 'QLD', 'ACT', 'TAS', 'WA', 'SA', 'NT'];
                }
                SetupPaymentComponent.prototype.next = function () {
                    this.currentPage++;
                };
                SetupPaymentComponent.prototype.prev = function () {
                    this.currentPage--;
                };
                SetupPaymentComponent.prototype.paynow = function () {
                    var _this = this;
                    this.paymentService.process(this.card)
                        .subscribe(function (data) {
                        _this.payment_result = data;
                    }, function (error) {
                    });
                };
                SetupPaymentComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/auth/setupPayment.component.html',
                        styleUrls: ['app/auth/setupPayment.component.css'],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [payment_service_1.PaymentService, router_1.Router])
                ], SetupPaymentComponent);
                return SetupPaymentComponent;
            }());
            exports_1("SetupPaymentComponent", SetupPaymentComponent);
        }
    }
});
//# sourceMappingURL=setupPayment.component.js.map
System.register(['@angular/core', '@angular/router', '@angular/http', 'rxjs/Rx', './home/welcome.component', './home/newRelease.component', './home/myGames.component', './gameLibrary/searchResults.component', './gameLibrary/gameDetail.component', './auth/register.component', './auth/login.component', './auth/forgotPassword.component', './auth/setupPayment.component', './attributes/highlight.directive', './services/auth.service', './services/game.service', './services/gameLibrary.service', './services/payment.service', './validators/usernameValidator', 'notifications', 'ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, welcome_component_1, newRelease_component_1, myGames_component_1, searchResults_component_1, gameDetail_component_1, register_component_1, login_component_1, forgotPassword_component_1, setupPayment_component_1, highlight_directive_1, auth_service_1, game_service_1, gameLibrary_service_1, payment_service_1, usernameValidator_1, notifications_1, ng2_bs3_modal_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (newRelease_component_1_1) {
                newRelease_component_1 = newRelease_component_1_1;
            },
            function (myGames_component_1_1) {
                myGames_component_1 = myGames_component_1_1;
            },
            function (searchResults_component_1_1) {
                searchResults_component_1 = searchResults_component_1_1;
            },
            function (gameDetail_component_1_1) {
                gameDetail_component_1 = gameDetail_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (forgotPassword_component_1_1) {
                forgotPassword_component_1 = forgotPassword_component_1_1;
            },
            function (setupPayment_component_1_1) {
                setupPayment_component_1 = setupPayment_component_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (gameLibrary_service_1_1) {
                gameLibrary_service_1 = gameLibrary_service_1_1;
            },
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            },
            function (usernameValidator_1_1) {
                usernameValidator_1 = usernameValidator_1_1;
            },
            function (notifications_1_1) {
                notifications_1 = notifications_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authService, _notifyService, _router) {
                    this.authService = authService;
                    this._notifyService = _notifyService;
                    this._router = _router;
                    this.pageTitle = "this is the first app component.";
                    this.q = "";
                    this.options = {
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
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.authService.CurrentUser = JSON.parse(sessionStorage.getItem('session-user'));
                };
                AppComponent.prototype.signout = function () {
                    var _this = this;
                    this.authService.logout()
                        .subscribe(function (data) {
                        sessionStorage.removeItem('session-user');
                        _this.authService.CurrentUser = null;
                    });
                };
                AppComponent.prototype.onLoginSuccess = function (message) {
                    //this.user = user;
                    console.log(message);
                };
                AppComponent.prototype.search = function () {
                    console.log('search ' + this.q);
                    this._router.navigate(['/search', this.q]);
                };
                AppComponent.prototype.showNotification = function () {
                    var html = "<p>Test</p><p>A nother test</p>";
                    this._notifyService.html(html, 'success');
                };
                AppComponent.prototype.showModal = function () {
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', (typeof (_a = typeof ng2_bs3_modal_1.ModalComponent !== 'undefined' && ng2_bs3_modal_1.ModalComponent) === 'function' && _a) || Object)
                ], AppComponent.prototype, "modal", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, highlight_directive_1.HighlightDirective, notifications_1.SimpleNotificationsComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                            auth_service_1.AuthService, game_service_1.GameService, gameLibrary_service_1.GameLibraryService, payment_service_1.PaymentService,
                            usernameValidator_1.UsernameValidator, notifications_1.NotificationsService
                        ]
                    }),
                    router_1.Routes([
                        { path: '/welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/newRelease', component: newRelease_component_1.NewReleaseComponent },
                        { path: '/myGames', component: myGames_component_1.MyGamesComponent },
                        { path: '/register', component: register_component_1.RegisterComponent },
                        { path: '/forgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent },
                        { path: '/payment', component: setupPayment_component_1.SetupPaymentComponent },
                        { path: '/search/:q', component: searchResults_component_1.SearchResultsComponent },
                        { path: '/gameDetail/:isin', component: gameDetail_component_1.GameDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, (typeof (_b = typeof notifications_1.NotificationsService !== 'undefined' && notifications_1.NotificationsService) === 'function' && _b) || Object, router_1.Router])
                ], AppComponent);
                return AppComponent;
                var _a, _b;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
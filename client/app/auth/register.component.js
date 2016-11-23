System.register(['@angular/core', '@angular/common', '@angular/router', '../services/auth.service', '../validators/usernameValidator'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, auth_service_1, usernameValidator_1;
    var RegisterComponent;
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
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (usernameValidator_1_1) {
                usernameValidator_1 = usernameValidator_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_authService, _usernameValidator, _router, builder) {
                    this._authService = _authService;
                    this._usernameValidator = _usernameValidator;
                    this._router = _router;
                    this.builder = builder;
                    this.userEmail = "";
                    this.password = "";
                    this.confirmPassword = "";
                    this.errorMessage = "";
                    this.REGISTER_SUCCESS = new core_1.EventEmitter();
                    this.username = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, _usernameValidator.startsWithNumber]), _usernameValidator.usernameTaken);
                    this.pw = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)]));
                    this.confirmpw = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)]));
                    this.regForm = builder.group({
                        username: this.username,
                        pw: this.pw,
                        confirmpw: this.confirmpw,
                    }, { validator: this.matchingPasswords('pw', 'confirmpw') });
                }
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    console.log('register ' + this.userEmail);
                    this._authService.register({
                        'email': this.userEmail,
                        'password': this.password
                    }).subscribe(function (data) {
                        _this._authService.setAuthorisedUserData(data);
                    }, function (error) { _this.errorMessage = error; });
                    this._router.navigate(['Welcome']);
                };
                RegisterComponent.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
                    return function (group) {
                        var password = group.controls[passwordKey];
                        var confirmPassword = group.controls[confirmPasswordKey];
                        if (password.value !== confirmPassword.value) {
                            return {
                                mismatchedPasswords: true
                            };
                        }
                        else {
                            return null;
                        }
                    };
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RegisterComponent.prototype, "REGISTER_SUCCESS", void 0);
                RegisterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/auth/register.component.html',
                        styleUrls: ['app/auth/register.component.css'],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, usernameValidator_1.UsernameValidator, router_1.Router, common_1.FormBuilder])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map
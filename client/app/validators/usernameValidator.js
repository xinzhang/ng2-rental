System.register(['@angular/core', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, auth_service_1;
    var UsernameValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            UsernameValidator = (function () {
                function UsernameValidator(authService) {
                    this.authService = authService;
                }
                UsernameValidator.prototype.startsWithNumber = function (control) {
                    var code = control.value.charAt(0);
                    if (control.value != "" &&
                        //((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))
                        !isNaN(code)) {
                        return { "startsWithNumber": true };
                    }
                    return null;
                };
                UsernameValidator.prototype.usernameTaken = function (control) {
                    console.log('username taken validation');
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value === "David") {
                                resolve({ "usernameTaken": true });
                            }
                            else {
                                resolve(null);
                            }
                            ;
                        }, 1000);
                    });
                };
                UsernameValidator.prototype.userNameValidator = function (control) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.authService.checkUser(control.value)
                            .then(function (data) {
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
                };
                UsernameValidator = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], UsernameValidator);
                return UsernameValidator;
            }());
            exports_1("UsernameValidator", UsernameValidator);
        }
    }
});
//# sourceMappingURL=usernameValidator.js.map
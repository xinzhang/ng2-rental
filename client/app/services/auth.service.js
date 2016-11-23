System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                    this._register_url = '/auth/register';
                    this._login_url = '/auth/login';
                    this._logout_url = '/auth/logout';
                    this._checkuser_url = '/auth/checkuser';
                    this.CurrentUser = null;
                    this.isUserLogin = false;
                }
                AuthService.prototype.register = function (data) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._register_url, JSON.stringify(data), options)
                        .map(function (resp) { return resp.json(); })
                        .catch(this.handleError);
                };
                AuthService.prototype.login = function (data) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._login_url, JSON.stringify(data), options)
                        .map(function (resp) { return resp.json(); })
                        .catch(this.handleError);
                };
                AuthService.prototype.logout = function () {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.get(this._logout_url, options)
                        .map(function (resp) { return resp.json(); })
                        .catch(this.handleError);
                };
                AuthService.prototype.setAuthorisedUserData = function (data) {
                    this.CurrentUser = {
                        email: data.email,
                        myCollection: data.collection,
                        myWishlist: data.wishlist
                    };
                    if (this.CurrentUser.myCollection == null) {
                        this.CurrentUser.myCollection = [];
                    }
                    if (this.CurrentUser.myWishlist == null) {
                        this.CurrentUser.myWishlist = [];
                    }
                    sessionStorage.setItem('session-user', JSON.stringify(data));
                };
                AuthService.prototype.checkUser = function (user) {
                    return this._http.get(this._checkuser_url + '/' + user)
                        .toPromise()
                        .catch(this.handleError);
                };
                AuthService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                AuthService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map
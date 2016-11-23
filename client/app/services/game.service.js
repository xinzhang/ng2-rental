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
    var GameService;
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
            GameService = (function () {
                function GameService(_http) {
                    this._http = _http;
                    this._newRelease_games_url = '/game/newRelease';
                    this._myCollection_games_url = '/game/my/collection';
                    this._myWishlist_games_url = '/game/my/wishlist';
                    this._my_games_url = '/game';
                    this.games = [];
                }
                GameService.prototype.getNewRelease = function () {
                    var _this = this;
                    return this._http.get(this._newRelease_games_url)
                        .map(function (resp) { return resp.json(); })
                        .do(function (data) { return _this.games = data; })
                        .catch(this.handleError);
                };
                GameService.prototype.getMyGames = function (type) {
                    var _this = this;
                    var _endpoint_url = '';
                    if (type == "collection") {
                        _endpoint_url = this._myCollection_games_url;
                    }
                    else if (type == "wishlist") {
                        _endpoint_url = this._myWishlist_games_url;
                    }
                    return this._http.get(_endpoint_url)
                        .map(function (resp) { return resp.json(); })
                        .do(function (data) { return _this.games = data; })
                        .catch(this.handleError);
                };
                GameService.prototype.getGameById = function (id) {
                    return this.games.find(function (x) { return x.gameId == id; });
                };
                GameService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                GameService.prototype.AddToMy = function (type, id) {
                    var data = {
                        'type': type,
                        'id': id
                    };
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._my_games_url + '/my', JSON.stringify(data), options)
                        .map(function (resp) { return resp.json(); })
                        .catch(this.handleError);
                };
                GameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GameService);
                return GameService;
            }());
            exports_1("GameService", GameService);
        }
    }
});
//# sourceMappingURL=game.service.js.map
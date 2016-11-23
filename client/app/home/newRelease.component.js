System.register(['@angular/core', '../services/game.service', '../services/auth.service', '@angular/router', '../services/game-platform.filter', '../services/game-order.filter'], function(exports_1, context_1) {
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
    var core_1, game_service_1, auth_service_1, router_1, game_platform_filter_1, game_order_filter_1;
    var NewReleaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_platform_filter_1_1) {
                game_platform_filter_1 = game_platform_filter_1_1;
            },
            function (game_order_filter_1_1) {
                game_order_filter_1 = game_order_filter_1_1;
            }],
        execute: function() {
            NewReleaseComponent = (function () {
                function NewReleaseComponent(_gameService, _authService) {
                    this._gameService = _gameService;
                    this._authService = _authService;
                    this.pageTitle = "New Release";
                    this.games = [];
                    this.errorMessage = "";
                    this.platformList = ['ps4', 'xbox one', 'ps3'];
                    this.platformFilter = '';
                    this.orderbyFilter = '';
                }
                NewReleaseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._gameService.getNewRelease()
                        .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
                };
                NewReleaseComponent.prototype.updatePlatformFilter = function (val) {
                    this.platformFilter = val;
                };
                NewReleaseComponent.prototype.orderby = function (val) {
                    this.orderbyFilter = val;
                };
                NewReleaseComponent.prototype.addToCollection = function (g) {
                    var _this = this;
                    this._gameService.AddToMy('collection', g.gameId)
                        .subscribe(function (data) {
                        _this._authService.CurrentUser.myCollection.push(g.gameId);
                    }, function (error) { return _this.errorMessage = error; });
                };
                NewReleaseComponent.prototype.addToWish = function (g) {
                    var _this = this;
                    this._gameService.AddToMy('wishlist', g.gameId)
                        .subscribe(function (data) {
                        _this._authService.CurrentUser.myWishlist.push(g.gameId);
                    }, function (error) { return _this.errorMessage = error; });
                };
                NewReleaseComponent.prototype.isInMy = function (type, gameId) {
                    if (this._authService.CurrentUser == null)
                        return false;
                    if (type == 'collection') {
                        if (this._authService.CurrentUser.myCollection == null || this._authService.CurrentUser.myCollection.length == 0)
                            return false;
                        return (this._authService.CurrentUser.myCollection.indexOf(gameId) > -1);
                    }
                    if (type == 'wishlist') {
                        if (this._authService.CurrentUser.myWishlist == null || this._authService.CurrentUser.myWishlist.length == 0)
                            return false;
                        return (this._authService.CurrentUser.myWishlist.indexOf(gameId) > -1);
                    }
                    return false;
                };
                NewReleaseComponent = __decorate([
                    core_1.Component({
                        selector: 'new-release',
                        templateUrl: 'app/home/newRelease.component.html',
                        styleUrls: ['app/home/newRelease.component.css'],
                        pipes: [game_platform_filter_1.GamePlatformFilterPipe, game_order_filter_1.GameOrderFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, auth_service_1.AuthService])
                ], NewReleaseComponent);
                return NewReleaseComponent;
            }());
            exports_1("NewReleaseComponent", NewReleaseComponent);
        }
    }
});
//# sourceMappingURL=newRelease.component.js.map
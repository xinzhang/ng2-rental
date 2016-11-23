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
    var MyGamesComponent;
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
            MyGamesComponent = (function () {
                function MyGamesComponent(_gameService, _authService) {
                    this._gameService = _gameService;
                    this._authService = _authService;
                    this.pageTitle = "My Games";
                    this.games = [];
                    this.errorMessage = "";
                    this.platformList = ['ps4', 'xbox one', 'ps3'];
                    this.platformFilter = '';
                    this.orderbyFilter = '';
                    this.currentTab = 'collection';
                }
                MyGamesComponent.prototype.ngOnInit = function () {
                    this.getMyGames('collection');
                };
                MyGamesComponent.prototype.updatePlatformFilter = function (val) {
                    this.platformFilter = val;
                };
                MyGamesComponent.prototype.orderby = function (val) {
                    this.orderbyFilter = val;
                };
                MyGamesComponent.prototype.getMyGames = function (type) {
                    var _this = this;
                    this.currentTab = type;
                    this._gameService.getMyGames(type)
                        .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
                };
                MyGamesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-games',
                        templateUrl: 'app/home/myGames.component.html',
                        pipes: [game_platform_filter_1.GamePlatformFilterPipe, game_order_filter_1.GameOrderFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, auth_service_1.AuthService])
                ], MyGamesComponent);
                return MyGamesComponent;
            }());
            exports_1("MyGamesComponent", MyGamesComponent);
        }
    }
});
//# sourceMappingURL=myGames.component.js.map
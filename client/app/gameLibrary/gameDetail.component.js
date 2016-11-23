System.register(['@angular/core', '@angular/router', '../services/gameLibrary.service', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, gameLibrary_service_1, auth_service_1, router_2;
    var GameDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (gameLibrary_service_1_1) {
                gameLibrary_service_1 = gameLibrary_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            GameDetailComponent = (function () {
                function GameDetailComponent(_gameLibraryService, _authService, _router) {
                    this._gameLibraryService = _gameLibraryService;
                    this._authService = _authService;
                    this._router = _router;
                    this.pageTitle = "";
                    this.game = null;
                    this.errorMessage = "";
                }
                GameDetailComponent.prototype.routerOnActivate = function (curr) {
                    var _this = this;
                    var isin = curr.getParam('isin');
                    this._gameLibraryService.getByIsin(isin)
                        .subscribe(function (g) {
                        console.log(g);
                        _this.game = g;
                        _this.pageTitle = g.gameTitle;
                    }, function (error) { return _this.errorMessage = error; });
                };
                GameDetailComponent.prototype.ngOnInit = function () {
                };
                GameDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'game-detail',
                        templateUrl: 'app/gameLibrary/gameDetail.component.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [gameLibrary_service_1.GameLibraryService, auth_service_1.AuthService, router_1.Router])
                ], GameDetailComponent);
                return GameDetailComponent;
            }());
            exports_1("GameDetailComponent", GameDetailComponent);
        }
    }
});
//# sourceMappingURL=gameDetail.component.js.map
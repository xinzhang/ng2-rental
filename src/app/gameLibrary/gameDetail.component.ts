import {Component, OnInit} from '@angular/core';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {GameLibraryService} from '../services/gameLibrary.service';
import {AuthService} from '../services/auth.service';

import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'game-detail',
    templateUrl: './gameDetail.component.html'
})
export class GameDetailComponent implements OnInit {
    pageTitle: string = "";
    game:IGame = null;
    errorMessage:string = "";
        
    constructor(private _gameLibraryService: GameLibraryService, 
        private _authService: AuthService,
        private _router: Router,
        private _route: ActivatedRoute) {            
    }
    
    // routerOnActivate(curr: RouteSegment): void {
    //     let isin = curr.getParam('isin');
        
    //     this._gameLibraryService.getByIsin(isin)
    //         .subscribe(
    //             g => {
    //                 console.log(g);
    //                 this.game = g;
    //                 this.pageTitle = g.gameTitle; 
    //             },                    
    //             error => this.errorMessage = <any>error
    //         );        
    // }
    
    ngOnInit(): void {
    //     this.route.params
    // // (+) converts string 'id' to a number
    // .switchMap((params: Params) => this.service.getHero(+params['id']))
    // .subscribe((hero: Hero) => this.hero = hero);
    }
    
}
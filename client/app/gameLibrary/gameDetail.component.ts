import {Component, OnInit} from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {GameLibraryService} from '../services/gameLibrary.service';
import {AuthService} from '../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'game-detail',
    templateUrl: 'app/gameLibrary/gameDetail.component.html',    
    directives: [ROUTER_DIRECTIVES]
})
export class GameDetailComponent implements OnInit {
    pageTitle: string = "";
    game:IGame = null;
    errorMessage:string = "";
        
    constructor(private _gameLibraryService: GameLibraryService, 
        private _authService: AuthService,
        private _router: Router) {            
    }
    
    routerOnActivate(curr: RouteSegment): void {
        let isin = curr.getParam('isin');
        
        this._gameLibraryService.getByIsin(isin)
            .subscribe(
                g => {
                    console.log(g);
                    this.game = g;
                    this.pageTitle = g.gameTitle; 
                },                    
                error => this.errorMessage = <any>error
            );        
    }
    
    ngOnInit(): void {
    }
    
}
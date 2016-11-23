import {Component, OnInit} from '@angular/core';
import { RouteSegment, OnActivate, Router } from '@angular/router';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {GameLibraryService} from '../services/gameLibrary.service';
import {AuthService} from '../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GamePlatformFilterPipe } from '../services/game-platform.filter';
import { GameOrderFilterPipe } from '../services/game-order.filter';

@Component({
    selector: 'search-results',
    templateUrl: 'app/gameLibrary/searchResults.component.html',
    pipes: [GamePlatformFilterPipe, GameOrderFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class SearchResultsComponent implements OnInit {
    pageTitle: string = "New Release";
    games: IGame[] = [];
    errorMessage: string = "";

    platformList: string[] = ['ps4', 'xbox one', 'ps3'];

    platformFilter: string = '';
    orderbyFilter: string = '';

    constructor(private _gameLibraryService: GameLibraryService,
        private _authService: AuthService,
        private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let query = curr.getParam('q');
        this._gameLibraryService.search(query)
            .subscribe( games => {
                this.games = games;
            },
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
    }

    updatePlatformFilter(val: string): void {
        this.platformFilter = val;
    }

    orderby(val: string): void {
        this.orderbyFilter = val;
    }
    
    addToRental(isin:string): void {
        this._gameLibraryService.addToRental(isin)
            .subscribe( (g)=>{
                    var currentGame = this.games.find(x => x.isin == isin);
                    currentGame = g;
                },
                error => this.errorMessage = <any>error
            );
    }

}
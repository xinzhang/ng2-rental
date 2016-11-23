import {Component, OnInit} from '@angular/core';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {AuthService} from '../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GamePlatformFilterPipe } from '../services/game-platform.filter';
import { GameOrderFilterPipe } from '../services/game-order.filter';

@Component({
    selector: 'my-games',
    templateUrl: 'app/home/myGames.component.html',
    pipes: [GamePlatformFilterPipe, GameOrderFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class MyGamesComponent implements OnInit {
    pageTitle: string = "My Games";
    games: IGame[] = [];
    errorMessage: string = "";

    platformList: string[] = ['ps4', 'xbox one', 'ps3'];

    platformFilter: string = '';
    orderbyFilter: string = '';
    currentTab: string = 'collection';

    constructor(private _gameService: GameService, private _authService: AuthService) {
    }

    ngOnInit(): void {
        this.getMyGames('collection');

    }

    updatePlatformFilter(val: string): void {
        this.platformFilter = val;
    }

    orderby(val: string): void {
        this.orderbyFilter = val;
    }

    getMyGames(type: string): void {
        this.currentTab = type;
        this._gameService.getMyGames(type)
            .subscribe(
            games => this.games = games,
            error => this.errorMessage = <any>error
            );
    }
}
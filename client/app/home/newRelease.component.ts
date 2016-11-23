import {Component, OnInit} from '@angular/core';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {AuthService} from '../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GamePlatformFilterPipe } from '../services/game-platform.filter';
import { GameOrderFilterPipe } from '../services/game-order.filter';

@Component({
    selector: 'new-release',
    templateUrl: 'app/home/newRelease.component.html',
    styleUrls: ['app/home/newRelease.component.css'],
    pipes: [GamePlatformFilterPipe, GameOrderFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class NewReleaseComponent implements OnInit {
    pageTitle: string = "New Release";
    games:IGame[] = [];
    errorMessage:string = "";
    
    platformList:string[] = ['ps4', 'xbox one', 'ps3'];
    
    platformFilter: string = '';
    orderbyFilter: string = ''; 
    
    constructor(private _gameService: GameService, private _authService: AuthService) {        
    }
    
    ngOnInit(): void {

        this._gameService.getNewRelease()
            .subscribe(
                games => this.games = games,
                error => this.errorMessage = <any>error
            );
    }
    
    updatePlatformFilter(val:string): void {
        this.platformFilter = val;
    }
    
    orderby(val:string): void {
        this.orderbyFilter = val;
    }
    
    addToCollection(g: IGame): void {
        this._gameService.AddToMy('collection', g.gameId)
            .subscribe(
                data => {                    
                    this._authService.CurrentUser.myCollection.push(g.gameId);
                },
                error => this.errorMessage = <any> error  
            );        
    }
    
    addToWish(g: IGame): void {
         this._gameService.AddToMy('wishlist', g.gameId)
            .subscribe(
                data => {
                    this._authService.CurrentUser.myWishlist.push(g.gameId);                    
                },
                error => this.errorMessage = <any> error  
            ); 
    }
    
    isInMy(type: string, gameId: number) {
        
        if (this._authService.CurrentUser == null)
            return false;
        
        if (type == 'collection') {
            if (this._authService.CurrentUser.myCollection == null || this._authService.CurrentUser.myCollection.length == 0)
                return false;
            
            return (this._authService.CurrentUser.myCollection.indexOf(gameId) > -1)
        }
        
        if (type == 'wishlist') {
            if (this._authService.CurrentUser.myWishlist== null || this._authService.CurrentUser.myWishlist.length == 0)
                return false;
            
            return (this._authService.CurrentUser.myWishlist.indexOf(gameId) > -1)            
        }
        
        return false;
    }
    
}
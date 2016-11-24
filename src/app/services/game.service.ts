
import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IGame} from './game';

@Injectable()
export class GameService {                
    private _newRelease_games_url = '/game/newRelease';
    private _myCollection_games_url = '/game/my/collection';
    private _myWishlist_games_url = '/game/my/wishlist';
    private _my_games_url = '/game';
    
    private games: IGame[] = [];  

    constructor(private _http: Http) { }

    getNewRelease(): Observable<IGame[]> {        
                
        return this._http.get(this._newRelease_games_url)
            .map ( 
                (resp: Response) => <IGame[]>resp.json()
            )
            .do( 
                data => this.games = data
            )
            .catch(this.handleError);
    }
    
    getMyGames(type:string) : Observable<IGame[]> {
        var _endpoint_url = '';
        
        if (type == "collection") {
            _endpoint_url = this._myCollection_games_url;    
        }
        else if (type == "wishlist") {
            _endpoint_url = this._myWishlist_games_url;
        }
        
        return this._http.get(_endpoint_url)
            .map ( 
                (resp: Response) => <IGame[]>resp.json()
            )
            .do( 
                data => this.games = data
            )
            .catch(this.handleError);
    }
        
    getGameById(id: number) : IGame {
        return this.games.find( x=> x.gameId == id);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    
    AddToMy(type:string, id: number) : Observable<any> {        
        let data = {
            'type': type,
            'id': id
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(this._my_games_url + '/my', JSON.stringify(data), options) 
             .map ( resp => resp.json())
            .catch(this.handleError);        
    }

}

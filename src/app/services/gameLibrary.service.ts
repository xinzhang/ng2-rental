
import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IGame} from './game';

@Injectable()
export class GameLibraryService {                
    private _gamelib_search_url = '/gamelib/search/';
    private _gamelib_addToRent_url = '/gamelib/addToRent/';
    private _gamelib_detail_url = '/gamelib/detail/';
    
    constructor(private _http: Http) { }

    private games: IGame[] = [];
    
    search(q:string): Observable<IGame[]> {        
                
        return this._http.get(this._gamelib_search_url + q)
            .map ( 
                (resp: Response) => <IGame[]>resp.json()
            )
            // .do( 
            //     data => {
            //         console.log('data returned');
            //         console.log(data);
            //         this.games = data;
            //     }
            // )
            .catch(this.handleError);
    }
    
    getByIsin(isin:string): Observable<IGame> {
        return this._http.get(this._gamelib_detail_url + isin)
            .map (
                (resp:Response) => <IGame>resp.json()
            )
            .catch(this.handleError);
    }
    
    addToRental(isin:string): Observable<IGame> {
        return this._http.get(this._gamelib_addToRent_url + isin)
            .map(
                (resp:Response) => <IGame>resp.json()
            )
            .catch(this.handleError);
    }
    
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}

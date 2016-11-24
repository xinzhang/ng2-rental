
import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IUser} from './user'

@Injectable()
export class AuthService {
    private _register_url = '/auth/register';
    private _login_url = '/auth/login';
    private _logout_url = '/auth/logout';
    private _checkuser_url = '/auth/checkuser';

    CurrentUser: IUser = null;
    isUserLogin: boolean = false;

    constructor(private _http: Http) { }

    register(data: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._register_url, JSON.stringify(data), options)
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    login(data: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._login_url, JSON.stringify(data), options)
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    logout(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._logout_url, options)
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    setAuthorisedUserData(data: any) {
        this.CurrentUser = <IUser>{
            email: data.email,
            myCollection: data.collection,
            myWishlist: data.wishlist
        }

        if (this.CurrentUser.myCollection == null) {
            this.CurrentUser.myCollection = [];
        }

        if (this.CurrentUser.myWishlist == null) {
            this.CurrentUser.myWishlist = [];
        }

        sessionStorage.setItem('session-user', JSON.stringify(data));
    }

    checkUser(user: string): Promise<any> {
        
        return this._http.get(this._checkuser_url + '/' + user)
            .toPromise()
            .catch(this.handleError);
    }

    extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

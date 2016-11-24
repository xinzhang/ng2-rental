
import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PaymentService {
    private _payment_url = '/payment/card';

    private secret: string = "vD3FnO5n7elLWkK-z4zJpg";
    private pubkey: string = "pk_R0jSerMKd4ZmzkmioV3Z3g";

    constructor(private _http: Http) { }

    process(data: any): Observable<any> {
        console.log("process");

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(this._payment_url, JSON.stringify(data), options)
            .map( resp => resp.text() )
            .catch(this.handleError);
    }

handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    



}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class ShipMethodService {

    private shipMethodUrl = environment.api_server + 'shipMethod/';

    constructor(private http: Http) {
    }

    getAllShipMethods() {
        let url = this.shipMethodUrl + 'all';
        return this.http.get(url).map((res) => res.json());
    }

    createNewShipMethods(data: any) {
        let headers = new Headers();
        let url = this.shipMethodUrl + 'create/';
        return this.http.post(url, data, { headers: headers }).map((res) => res.json());
    }



}

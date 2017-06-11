import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

    private itemUrl = environment.api_server + 'item/';

    constructor(private http: Http) {
    }

    getAllItems() {
        let url = this.itemUrl + 'all';
        return this.http.get(url).map((res) => res.json());
    }

    createNewItem(data: any) {
        let headers = new Headers();
        let url = this.itemUrl + 'create/';
        return this.http.post(url, data, { headers: headers }).map((res) => res.json());
    }



}

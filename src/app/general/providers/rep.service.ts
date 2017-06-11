import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class RepService {

    private repUrl = environment.api_server + 'rep/';

    constructor(private http: Http) {
    }

    getAllReps() {
        let url = this.repUrl + 'all';
        return this.http.get(url).map((res) => res.json());
    }

    createNewRep(data: any) {
        let headers = new Headers();
        let url = this.repUrl + 'create/';
        return this.http.post(url, data, { headers: headers }).map((res) => res.json());
    }

    getRepById(id: any) {
        let url = this.repUrl + 'id/' + id;
        return this.http.get(url).map((res) => res.json());
    }

}

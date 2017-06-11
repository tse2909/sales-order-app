import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

    private customerUrl = environment.api_server + 'customer/';

    constructor(private http: Http) {
    }

    getAllCustomers(paginator) {
        let url = this.customerUrl + 'all/' + 'page=' + paginator;
        return this.http.get(url).map((res) => res.json());
    }

    createNewCustomer(data: any) {
        let headers = new Headers();
        let url = this.customerUrl + 'create/';
        return this.http.post(url, data, { headers: headers }).map((res) => res.json());
    }



}

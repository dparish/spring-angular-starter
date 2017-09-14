import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Customer} from './model/generated';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpResponse} from '@angular/common/http';

@Injectable()
export class CustomerService {
  readonly customersUrl = '/customers';

  constructor(private http: Http) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get(this.customersUrl).map((response: Response) => response.json());
  }
}

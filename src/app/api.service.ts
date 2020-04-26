import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    readonly Api = "";
    constructor(private http: HttpClient) { }

    addContact(data: Contact): Observable<Contact>
    {
        return this.http.post<Contact>(this.Api, data);
    }
}

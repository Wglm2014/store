import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private resourceUrl = SERVER_API_URL + 'api/departments';

  constructor(private http: HttpClient) { }


create(department: Department):Observable<HttpResponse<Department>>{
    let httpOptions = {
      headers: new HttpHeaders({'content-type':'application/json'})
    }
    return this.http.post<Department>(this.resourceUrl,department,{observe:'response'});
 }
}

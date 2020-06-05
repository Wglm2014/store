import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private resourceUrl = SERVER_API_URL + 'api/department';

  constructor(private http: HttpClient) { }

  findAll(options?: any):Observable<HttpResponse<Department[]>>{
    let sparams:HttpParams;
    if(options){
      sparams = new HttpParams()
      .set('page', options.page)
      .set('size',options.size)
      .set('sort',options.sort);
    }
    return this.http.get<Department[]>(this.resourceUrl,{params:sparams,observe:'response'});

  }

  create(department: Department):Observable<HttpResponse<Department>>{
    console.log(department);
      return this.http.post<Department>(this.resourceUrl,department,{observe:'response'});
  }
}

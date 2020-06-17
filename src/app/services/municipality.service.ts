import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { Municipality } from '../models/municipality';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  //initialize the url
  private resourceUrl = SERVER_API_URL + 'api/municipality';
  //
  constructor(private http: HttpClient) { }

  findByDepartmentId(departmentId: number, options?: any): Observable<HttpResponse<Municipality[]>> {
    let sparams: HttpParams;
    if (options) {
      sparams = new HttpParams().set('page', options.page).set('size', options.size).set('sort', options.sort);
    }
    return this.http.get<Municipality[]>(this.resourceUrl + '/' + departmentId, { observe: 'response' });
  }

  create(municipality: Municipality): Observable<HttpResponse<Municipality>> {

    return this.http.post<Municipality>(this.resourceUrl, municipality, { observe: 'response' });
  }

  update(municipality: Municipality): Observable<HttpResponse<Municipality>> {
    return this.http.put<Municipality>(this.resourceUrl, municipality, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<Municipality>> {
    return this.http.delete<Municipality>(this.resourceUrl + '/' + id, { observe: 'response' });
  }
}

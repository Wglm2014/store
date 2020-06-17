import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private resourceUrl = SERVER_API_URL;
  constructor(private http: HttpClient) { }

  findAll(options: any): Observable<HttpResponse<Company[]>> {
    let sparams: HttpParams;

    if (options) {
      sparams = new HttpParams()
        .set('page', options.page)
        .set('size', options.size)
        .set('sort', options.sort);
    }
    return this.http.get<Company[]>(this.resourceUrl, { params: sparams, observe: 'response' })
  }

  find(id: number): Observable<HttpResponse<Company>> {
    return this.http.get<Company>(this.resourceUrl + '/' + id, { observe: 'response' });
  }

  create(company: Company) {
    return this.http.post<Company>(this.resourceUrl, company, { observe: 'response' });
  }

  update(company: Company) {
    return this.http.put<Company>(this.resourceUrl, company, { observe: 'response' });
  }

  delete(id: number) {
    return this.http.delete<any>(this.resourceUrl + '/' + id, { observe: 'response' });
  }
}

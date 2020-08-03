import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private resourceUrl = SERVER_API_URL + "api/branch";

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Branch[]>> {
    return this.http.get<Branch[]>(this.resourceUrl, { observe: 'response' });
  }

  find(id: number) {
    return this.http.get<Branch>(this.resourceUrl + '/' + id, { observe: 'response' });
  }

  create(branch: Branch) {
    return this.http.post<Branch>(this.resourceUrl, branch, { observe: 'response' });
  }

  update(branch: Branch) {
    return this.http.put<Branch>(this.resourceUrl, branch, { observe: 'response' });
  }

  delete(id: number) {
    return this.http.delete<any>(this.resourceUrl + '/' + id, { observe: 'response' });
  }
}

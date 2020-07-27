import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== "GET") {
      console.log(`invalidating cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    const chachedResponse: HttpResponse<any> = this.cacheService.get(req.url);
    if (chachedResponse) {
      console.log(chachedResponse);
      return of(chachedResponse);
    }

    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(`adding item to cache: ${req.url}`)
            this.cacheService.put(req.url, event);
          }
        })
      );
  }
}

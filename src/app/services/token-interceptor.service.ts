import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) : any {
    let tokenizedRequest = req.clone({
      setHeaders: {
        authorization: 'Bearer ' + localStorage.getItem('x-access-token')
      }
    })
    return next.handle(tokenizedRequest).pipe(tap(evt => {
      if (evt instanceof HttpResponse) {
        const sessionToken = evt.headers.get('x-access-token');
        if (sessionToken) {
          localStorage.setItem('x-access-token', sessionToken)
        }
      }
    }),
    finalize(() => {
    
    })).toPromise()
  }
}

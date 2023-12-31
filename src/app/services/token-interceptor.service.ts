import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    
    let tokenizedRequest = req.clone({
      setHeaders: {
        'x-access-token': localStorage.getItem('x-access-token') || ''
      }
    })

    return next.handle(tokenizedRequest)
      .pipe(tap(evt => {
        if (evt instanceof HttpResponse) {
          const sessionToken = evt.headers.get('x-access-token');
          if (sessionToken) {
            localStorage.setItem('x-access-token', sessionToken)
          }
        }
      }))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 403) {
            this._router.navigate(['/auth/login'])
          }
          return throwError(error.error)
        })
      )
  }
}

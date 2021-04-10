import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaleStorageService } from '../services/locale-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localeStorage:LocaleStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.localeStorage.get("token");
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers:request.headers.set("Authorization","Bearer" + token)
    })
    return next.handle(newRequest);
  }
}

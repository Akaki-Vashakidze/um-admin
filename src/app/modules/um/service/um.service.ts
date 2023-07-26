import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, firstValueFrom, map, tap } from 'rxjs';
import { DashboardResponce } from 'src/app/Utils/classes/classes';
import { Application } from '../../shared/interfaces/Application';
import { AlertService } from '../../shared/service/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UmService {

  constructor(private _http: HttpClient, private _alertService: AlertService) { }

  async searchData() {
    return firstValueFrom<DashboardResponce>(this._http.get<DashboardResponce>("/api/um/v1/dashboard/statistics"))
  }

  private handleError(error: any) {
    if (error) {
      switch (error.status) {
        case 400:
          this._alertService.alert('Error 400', 'Error 400')
          break;
        case 401:
          this._alertService.alert('Error 401', 'Error 401')
          break;
        case 402:
          this._alertService.alert('Error 402', 'Error 402')
          break;
        case 403:
          this._alertService.alert('Error 403', 'Error 403')
          break;
        case 404:
          this._alertService.alert('Error 404', 'Error 404')
          break;
        case 405:
          this._alertService.alert('Error 405', 'Error 405')
          break;
      }
    }
  }

  async getAppsList(item: any, paging: any) {
    let data = { 'data': item, 'paging': paging }
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/search", data)
      .pipe(map(res => {
        if (res) {
          return res.result
        } else return null;
      }), tap(() => { }, (err) => this.handleError(err))
        , finalize(() => {
        })))
  }

  async getClientsList(item: any, paging: any) {
    let data = { 'data': item, 'paging': paging }
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/search", data)
      .pipe(map(res => {
        if (res.result) {
          return res.result
        } else return null;
      }), tap(() => { }, (err) => this.handleError(err))
        , finalize(() => {
        })))
  }

  async getAppClients(requestBody: any) {
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/clients/search", requestBody).pipe(map(res => {
      if (res.result) {
        return res.result
      } else return null;
    }), tap(() => { }, (err) => this.handleError(err))
      , finalize(() => {
      })))
  }

}

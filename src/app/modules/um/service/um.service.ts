import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, firstValueFrom, map, tap } from 'rxjs';
import { DashboardResponce } from 'src/app/Utils/classes/classes';
import { Application } from '../../shared/interfaces/Application';

@Injectable({
  providedIn: 'root'
})
export class UmService {

  constructor(private _http: HttpClient) { }

  async searchData() {
    return firstValueFrom<DashboardResponce>(this._http.get<DashboardResponce>("/api/um/v1/dashboard/statistics"))
  }

  async getAppsList(item: any, paging: any) {
    let data = { 'data': item, 'paging': paging }
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/search", data)
      .pipe(map(res => {
        if (res.result) {
          return res.result
        } else return res.errors;
      }), finalize(() => {
      })))
  }


  async getClientsList(item: any, paging: any) {
    let data = { 'data': item, 'paging': paging }
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/search", data)
      .pipe(map(res => {
        if (res.result) {
          return res.result
        } else return null;
      }), finalize(() => {
      })))
  }

  async getAppClients(requestBody: any) {
    return firstValueFrom<any>(this._http.post<any>("/api/um/v1/applications/clients/search", requestBody).pipe(map(res => {
      if (res.result) {
        return res.result
      } else return null;
    }), finalize(() => {
    })))
  }

}

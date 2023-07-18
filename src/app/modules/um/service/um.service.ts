import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DashboardResponce } from 'src/app/Utils/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class UmService {

  constructor(private _http:HttpClient) { }

  async searchData() {
    return firstValueFrom<DashboardResponce>(this._http.get<DashboardResponce>("/api/um/v1/dashboard/statistics"))
  }
}

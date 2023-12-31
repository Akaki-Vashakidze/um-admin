import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UmService {

  constructor(private _http:HttpClient) { }

  async searchData() {
    return firstValueFrom(this._http.get("/api/um/v1/dashboard/statistics"))
  }
}

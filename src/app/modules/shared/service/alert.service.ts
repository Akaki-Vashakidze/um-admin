import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../components/alert/alert.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _dialog:MatDialog) { }

  public alert(title:string, message:string) {
    this._dialog.open(AlertComponent,{data:{title:title,message:message}})
  }

  public confirm(title:string, message:string, onSubmit: Function, onCancel:Function,info:any) {
    this._dialog.open(ConfirmComponent,{data:{title:title,message:message,onSubmit:onSubmit,onCancel:onCancel,userId:info}})
  }
}

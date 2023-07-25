import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {

  private loadSrc: BehaviorSubject<any> = new BehaviorSubject(false);
  loading = this.loadSrc.asObservable();
  constructor(private dialog: MatDialog) {}

  start() {
    this.loadSrc.next(true)
  }

  stop(){
    this.loadSrc.next(false);
  }
}

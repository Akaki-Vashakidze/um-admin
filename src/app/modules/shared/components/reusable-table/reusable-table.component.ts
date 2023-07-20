import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {
  @Input()
  tableColumns: Array<any> = [];

  @Input()
  tableData: Array<any> = [];

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}

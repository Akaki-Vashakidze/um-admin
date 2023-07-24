import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() tableColumns: Array<any> = [];
  @Input() tableData: Array<any> = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() tableHeaders!: string[];
  @Input() paging!: { length: number, pageSize: number, pageIndex: number };
  @Input() pageSizeOptions: number[] = [];
  @Output() pageChange: EventEmitter<{ length: number, pageSize: number, pageIndex: number }> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();
  dataSource: MatTableDataSource<any> = new MatTableDataSource();


  constructor() { }

  ngOnInit(): void {
    console.log(this.tableData)
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  page(e: any) {
    this.pageChange.emit(e);
  }

  filter(item:any){
    this.search.emit(item);
  }
}

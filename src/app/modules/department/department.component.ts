import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  data: Department[];
  params: Department = new Department();
  cloneDepartment: { [s: string]: Department; } = {};

  //hide or show form create component
  hideParent: boolean = false;
  editing: boolean = false;

  //Paginator and sort table
  cols: any[];
  first = 0;
  rows = 10;
  totalRecords: any;



  constructor(private departmentService: DepartmentService,
    private router: Router) {
  }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'No.' },
      { field: 'title', header: 'Nombre de Departamento' },
    ]

    this.toggle();
    this.loadDepartments({ rows: 5, totalRecords: 1, first: 5 })
  }

  loadDepartments(event: any) {

    const page = event.first / event.rows;

    this.departmentService.findAll({
      'page': page,
      'size': event.rows,
      'sort': event.sortField + ',' + (event.sortOrder === 1 ? 'ASC' : 'DESC')
    }).subscribe(
      (res: HttpResponse<Department[]>) => {
        this.totalRecords = res.headers.get('x-Total-Count');
        this.data = res.body;
      },
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }


  onDelete(id: number) {
    this.departmentService.delete(id).subscribe(
      (res: any) => {
        console.log(res);
        console.log(this.data.filter(row => { return row.id != res.body.id }));
        return res
      }
      , (error: HttpErrorResponse) => console.log(error.message)
    );
  }

  goToMunicipalities(department: Department) {
    console.log(department);
    this.router.navigate(["municipality/"], { queryParams: { id: department.id, title: department.title }, skipLocationChange: true });
  }
  //toggle the form create component
  toggle() {
    this.hideParent = !this.hideParent;
  }

  onRowEditInit(department: Department) {
    this.cloneDepartment[department.id] = { ...department };
  }
  onRowEditSave(department: Department) {
    this.departmentService.update(department).subscribe(
      (res: any) => {
        console.log(res);
        delete this.cloneDepartment[department.id];
      }, (error: HttpErrorResponse) => console.log(error.message)
    );
  }
  onRowEditCancel(department: Department, index: number) {
    this.data[index] = this.cloneDepartment[department.id];
  }



}

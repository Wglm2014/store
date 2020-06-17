import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  data: Department[];
  cols: String[] = ['id', 'title', 'action'];
  totalRecords: any;
  params: Department = new Department();

  //hide or show form create component
  hideParent: boolean = false;
  hideEdit: boolean = true;

  constructor(private departmentService: DepartmentService,
    private router: Router) {
  }

  ngOnInit() {
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

  onUpdate(department: Department) {
    this.params = department;
    this.toggleEdit();
  }

  saveUpdate(department: Department) {

    this.departmentService.update(this.params).subscribe(
      (res: any) => {
        console.log(res);
        return res
      }, (error: HttpErrorResponse) => console.log(error.message)
    );
    this.toggleEdit();
  }

  onDelete(id: number) {
    this.departmentService.delete(id).subscribe(
      (res: any) => { console.log(res); return res }
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
  toggleEdit() {
    this.hideEdit = !this.hideEdit;
  }
}

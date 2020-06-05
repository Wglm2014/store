import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  data: Department[];
  cols: String[] = ['id','title'];

  totalRecords:any;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.loadDepartments({rows:5,totalRecords:1,first:5})
  }

  loadDepartments(event:any){
    const page= event.first/event.rows;

    this.departmentService.findAll({
      'page':page,
      'size':event.rows,
      'sort':event.sortField+','+(event.sortOrder===1?'ASC':'DESC')
    }).subscribe(
      (res: HttpResponse<Department[]>)=>{
        this.totalRecords=res.headers.get('x-Total-Count');
        this.data = res.body;
      },
      (error:HttpErrorResponse)=>console.log(error.message)
    );
    console.log(this.data);
  }

  goToCreate(){
    this.router.navigateByUrl('department-create');
  }
}

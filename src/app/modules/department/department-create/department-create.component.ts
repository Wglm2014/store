import { Component, OnInit, OnDestroy } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit,OnDestroy {
  department: Department = new Department();
  subRoute: any;
  constructor(private departmentService:DepartmentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subRoute = this.route.params.subscribe((params=> {
    //   if (params.id){
    //     this.departmentService.find(params.id).subscribe(
    //       (res:HttpResponse<Department>) =>{
    //         this.department = res.body;
    //       },
    //       (error: HttpErrorResponse) => console.log(error.message)
    //     );
    //   }
    // }));
  }


  ngOnDestroy(): void {
    //this.subRoute.unsubscribe();
  }

  save(){
    this.departmentService.create(this.department).subscribe(
      (res:HttpResponse<Department>)=>{
        this.router.navigateByUrl('department');
      },
      (error:HttpErrorResponse)=>console.log(error.message)
    );
  }

  cancel(){
    this.router.navigateByUrl('department');
  }
}

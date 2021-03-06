import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {
  department: Department = new Department();
  @ViewChild("editForm") form: any;
  @Output() newDepartment = new EventEmitter<Department>();

  @Output() hideCreate = new EventEmitter<boolean>();
  toggle() {
    this.hideCreate.emit(true);
  }

  constructor(private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }


  save() {
    this.departmentService.create(this.department).subscribe(
      (res: HttpResponse<Department>) => {
        this.newDepartment.emit(res.body);
      },
      (error: HttpErrorResponse) => console.log(error.message)
    );
    if (this.form.valid) {
      this.form.reset();
    }
  }
}

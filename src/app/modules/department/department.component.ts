import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  cols: any[];
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.cols = [
      {field: 'id', header:'Id'},
      {field: 'name', header:'Name'}
    ];

  }

  goToCreate(){
    this.router.navigateByUrl('department-create');
  }
}

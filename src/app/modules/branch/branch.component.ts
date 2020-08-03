import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';
import { Company } from '../../models/company';
import { Department } from '../../models/department';
import { Municipality } from '../../models/municipality';
import { Branch } from '../../models/branch';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  companies: Company[];
  departments: Department[];
  municipalities: Municipality[];
  Branches: Branch[];

  hide: boolean = false;

  noBranches: number = 0;

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.findAll().subscribe(
      (res: HttpResponse<Branch[]>) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  toggle() {

  }

  newBranch() {

  }

  edit() {

  }

  handleEdit() {

  }

  delete() {

  }

}

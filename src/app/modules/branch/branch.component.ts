import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';

import { Branch } from '../../models/branch';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branches: Branch[];
  companyName: string;
  address: string;
  department: string;
  municipality: string;
  hide: boolean = false;
  noBranches: number;
  editedBranch: Branch;
  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.findAll().subscribe(
      (res: HttpResponse<Branch[]>) => {
        this.branches = res.body;
        this.noBranches = this.branches.length;
        console.log(this.branches);
      },
      (error) => {
        this.noBranches = 0;
        console.log(error);
      }
    )
  }

  toggle() {
    this.hide = !this.hide
  }

  newBranch(branch: Branch) {

  }

  edit() {

  }

  handleEdit(branch: Branch) {

  }

  delete() {

  }

}

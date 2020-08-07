import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';

import { Branch } from '../../models/branch';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branches: Branch[];
  editedBranchIndex: number;
  companyName: string;
  address: string;
  department: string;
  municipality: string;
  hide: boolean = false;
  noBranches: number;
  editedBranch: any;
  BranchClone: Branch;
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
    this.branches.push(branch);
  }

  delete(id: number) {
    this.branchService.delete(id).subscribe(
      (response: any) => {
        this.branches = this.branches.filter(remainingBranches => {
          return remainingBranches.id !== response.body.id;
        })
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  edit(branch: Branch, i: any) {
    console.log(branch, i);
    this.editedBranchIndex = i;
    this.BranchClone = this.branches[i];
    const temporaryArrayAddress = branch.address.split(",");
    this.address = temporaryArrayAddress.splice(0, temporaryArrayAddress.length - 2).join();
    this.department = temporaryArrayAddress[temporaryArrayAddress.length - 2];
    this.municipality = temporaryArrayAddress[temporaryArrayAddress.length - 1];
    this.editedBranch = branch;
    console.log(this.editedBranch);
    this.toggle();

  }

  handleEdit(editedBranchResponse: any) {
    if (editedBranchResponse) {
      this.branches[this.editedBranchIndex] = editedBranchResponse;
    } else {
      this.branches[this.editedBranchIndex] = this.BranchClone;
      this.editedBranch = "";
      this.editedBranchIndex = null;
      this.address = "";
      this.department = "";
      this.municipality = "";
    }
    this.toggle();
  }



}

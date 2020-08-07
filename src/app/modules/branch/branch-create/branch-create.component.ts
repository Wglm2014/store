import { Component, Input, OnInit, Output, EventEmitter, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { Branch } from '../../../models/branch';
import { Company } from '../../../models/company';
import { CompanyService } from '../../../services/company.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'branch-create',
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.css']
})
export class BranchCreateComponent implements OnInit, OnChanges, OnDestroy {
  companies: any;
  branch: Branch = new Branch();
  @Input('address') address: string;
  @Input('department') department: string;
  @Input('municipality') municipality: string;
  @Input('branchEdit') branchEdit: Branch;

  @ViewChild('createForm') form: any;

  @Output() createdBranch = new EventEmitter<Branch>();
  @Output() editResult = new EventEmitter<any>();
  @Output() addBranch = new EventEmitter<boolean>();

  constructor(private branchService: BranchService, private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.findAll(null).subscribe(
      (response: HttpResponse<Company[]>) => {
        this.companies = response.body.map(company => {
          return { label: company.commercialName, value: company.id };
        });
        this.companies.unshift({ label: "", value: NaN });
        console.log(this.companies);
      },

      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
  ngOnChanges() {
    console.log("on changes");
    if (this.branchEdit) {
      console.log(this.branchEdit);
      this.branch = this.branchEdit;
    }
  }
  ngOnDestroy() {
    this.clearData();
  }
  save() {
    this.branch.address = `${this.address}, ${this.department}, ${this.municipality}`
    if (!this.branchEdit) {
      this.branchService.create(this.branch).subscribe(
        (response: HttpResponse<Branch>) => {
          console.log(response.body);
          //this.createdBranch.emit(response.body);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    } else {
      this.branchService.update(this.branch).subscribe(
        (response: HttpResponse<Branch>) => {
          this.editResult.emit(response.body)
          this.addBranch.emit(true);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.editResult.emit(null);
        }
      )
    }
    if (this.form.valid) {
      this.form.reset();
    }
  }

  cancel() {
    // this.addBranch.emit(true);
    this.editResult.emit(null);
  }

  clearData() {
    this.branch = null;
    this.branchEdit = this.branch;
    this.address = "";
    this.department = "";
    this.municipality = "";
    this.form.reset();
  }

  editedAddress(address: string) {
    this.address = address
  }
  editedDepartment(department: string) {
    this.department = department
  }
  editedMunicipality(municipality: string) {
    this.municipality = municipality;
  }

}

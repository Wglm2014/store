import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[];
  companyClone: any;
  address: string;
  department: string;
  municipality: string;
  hide: boolean = true;
  editMode: boolean = false;
  noCompanies: number;
  readonly: boolean = true;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.findAll(null).subscribe(
      (response: HttpResponse<Company[]>) => {
        this.companies = response.body;
        this.companies.forEach(company => {
          // console.log(company.logo.length);
          // console.log(company.logo);
        })
        this.noCompanies = this.companies.length;
      },
      (error: HttpErrorResponse) => {
        this.companies = [];
        this.noCompanies = 0;
        console.log(error);
      }
    )

  }
  toggle() {
    this.hide = !this.hide;
  }


  newCompany(company: Company) {

  }

  edit(company: Company, i: any) {
    this.readonly = !this.readonly;
    this.editMode = !this.editMode;
    this.companyClone = this.companies[i];
    const departmentMunicipality = company.address.split(",");
    this.address = departmentMunicipality.splice(0, departmentMunicipality.length - 2).join();
    this.department = departmentMunicipality[departmentMunicipality.length - 1];
    this.municipality = departmentMunicipality[departmentMunicipality.length - 2]

  }
  delete(company: Company) {

  }

  cancel(i: any) {
    // this.companies[i] = this.companyClone;
    // this.companyClone = [];
    console.log(i);
    this.editMode = !this.editMode
  }
  save(company: Company) {

  }
}

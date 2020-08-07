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
  companies: Company[]; //list of companies store in the DB
  companyClone: Company;
  editedCompany: any; //when a company is to be edited the company is assign
  address: string; // temporary holds the address string with no department or municipality when company is being edited
  department: string; // temporary holds the department when company is being edited
  municipality: string; // temporary holds the municipality when company is being edited
  image: any; //temporary holds the image when company is being edited
  hide: boolean = true; //hides the create-edit form
  editedCompanyIndex: any; //index of the company that is being edited
  noCompanies: number; //total companies in the list

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.findAll(null).subscribe(
      (response: HttpResponse<Company[]>) => {
        this.companies = response.body;
        console.log(response.body);
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

  //push a new created company to the array
  newCompany(company: Company) {
    this.companies.push(company);
  }

  edit(company: Company, i: any) {
    this.toggle();
    this.editedCompanyIndex = i;
    this.companyClone = this.companies[i];
    // console.log(this.companyClone);
    const departmentMunicipality = company.address.split(",");
    this.address = departmentMunicipality.splice(0, departmentMunicipality.length - 2).join();
    console.log(this.address);
    this.department = departmentMunicipality[departmentMunicipality.length - 2].trim();
    this.municipality = departmentMunicipality[departmentMunicipality.length - 1].trim();
    this.image = company.logo;
    this.editedCompany = company;
  }

  delete(id: number) {
    this.companyService.delete(id).subscribe(
      (res: any) => {

        this.companies = this.companies.filter(remainingCompanies => {
          return remainingCompanies.id !== res.body.id;
        })
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  handleEdit(editedCompanyResponse: any) {
    console.log("I am back");
    console.log(this.companyClone);
    if (editedCompanyResponse) {
      this.companies[this.editedCompanyIndex] = editedCompanyResponse;
    } else {
      this.companies[this.editedCompanyIndex] = this.companyClone;
      console.log("canceling");
      this.editedCompany = "";
      this.editedCompanyIndex = null;
      this.address = "";
      this.department = "";
      this.municipality = "";
      this.image = "";
    }
    this.toggle();
  }


}

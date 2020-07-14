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
  hide: boolean = true;
  noCompanies: number;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.findAll(null).subscribe(
      (response: HttpResponse<Company[]>) => {
        this.companies = response.body;
        this.companies.forEach(company => {
          console.log(company.logo.length);
          console.log(company.logo);
          // company.logo = new URL(`data:${company.logoContentType};base64,/9j/${company.logo}`);
        })
        console.log(this.companies);
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

  edit(company: Company) {

  }
  delete(company: Company) {

  }
}

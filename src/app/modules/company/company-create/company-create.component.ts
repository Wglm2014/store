import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Department } from '../../../models/department';
import { Municipality } from '../../../models/municipality';
import { DepartmentService } from '../../../services/department.service';
import { MunicipalityService } from '../../../services/municipality.service';
import { Company } from '../../../models/company';
// import { FormControl } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  departments: Department[];
  municipalities: Municipality[];
  reduceMunicipalities: Municipality[];
  municipality: string;
  department: string;
  company: Company = new Company();
  telephone: string;
  otherPhone: string;
  image: any;
  logo: any;
  filteredDepartment: any[];
  filteredMunicipality: any[];

  @ViewChild("createForm") form: any;


  @Output() createdCompany = new EventEmitter<Company>();

  @Output() addCompany = new EventEmitter<boolean>();

  toggle() {
    this.addCompany.emit(true);
  }
  constructor(private departmentService: DepartmentService,
    private municipalityService: MunicipalityService,
    private companyService: CompanyService,
    private http: HttpClient,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.departmentService.findAll().subscribe(
      (response: HttpResponse<Department[]>) => { this.departments = response.body },
      (error: HttpErrorResponse) => { return error }
    );

    this.municipalityService.findAll().subscribe(
      (response: HttpResponse<Municipality[]>) => { this.municipalities = response.body },
      (error: HttpErrorResponse) => { console.log(error) }
    );
  }

  filterDepartment(event) {
    let query = event.query;
    this.filteredDepartment = [];
    for (let i = 0; i < this.departments.length; i++) {
      let department = this.departments[i];
      if (department.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        this.filteredDepartment.push(department.title);
        // console.log(department);
      }
    }
  }

  filterMunicipality(event) {
    let query = event.query;
    this.filteredMunicipality = [];
    for (let i = 0; i < this.municipalities.length; i++) {
      let municipality = this.municipalities[i];

      if (municipality.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        this.filteredMunicipality.push(municipality.longTitle);
      }
    }
  }

  filterMunicipalities(title: string) {
    const thisDepartment = this.departments.filter(item => { if (item.title === title) { return item } });
    this.reduceMunicipalities = thisDepartment[0]['municipalities'];
  }

  save() {
    this.company.address = `${this.company.address}, ${this.municipality}, ${this.department}`;
    this.companyService.create(this.company).subscribe(
      (response: HttpResponse<Company>) => {

        this.createdCompany.emit(response.body);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    if (this.form.valid) {
      this.form.reset();
    }
  }
  edit() {

  }
  delete() { }


  loadImage(event) {

    const target = event.target;
    const files = target.files;
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
    if (FileReader && files && files.length) {
      let fileReader = new FileReader()
      fileReader.onload = () => {
        this.image = fileReader.result;
        this.company.logo = this.image;
        this.company.logoContentType = files[0].type;

      }
      fileReader.readAsDataURL(files[0]);
    } else {
      console.error("not compatible");
    }


  }



}

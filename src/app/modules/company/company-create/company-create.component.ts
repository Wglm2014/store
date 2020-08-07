import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnChanges, OnDestroy } from '@angular/core';
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
export class CompanyCreateComponent implements OnInit, OnChanges, OnDestroy {
  company: Company = new Company();
  departments: Department[];
  municipalities: Municipality[];
  reduceMunicipalities: Municipality[];
  filteredDepartment: any[];
  filteredMunicipality: any[];
  telephone: string;
  otherPhone: string;
  logo: any;

  @Input("municipality") municipality: string;
  @Input("department") department: string;
  @Input("address") address: string;
  @Input("companyEdit") companyEdit: Company;

  @Input("imageEdit") image: any;


  // to present errors in validations en clear the form when passes
  @ViewChild("createForm") form: any;

  // to emit the new created company to the parent module and push to array of companies
  @Output() createdCompany = new EventEmitter<Company>();

  //emit a boolean to indicate when the company has been created, hides the form
  @Output() addCompany = new EventEmitter<boolean>();
  toggle() {
    this.addCompany.emit(true);
  }

  // emits the result of an updated company or emits null if the edition was cancel
  @Output() editResult = new EventEmitter<any>();


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
  ngOnChanges(): void {
    if (this.companyEdit) {
      this.company = this.companyEdit;
    }
  }

  ngOnDestroy(): void {
    this.clearData();
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
    this.company.address = `${this.address}, ${this.municipality}, ${this.department}`;
    if (this.companyEdit) {
      this.companyService.update(this.company).subscribe(
        (response: HttpResponse<Company>) => {
          // console.log(response.body);
          this.editResult.emit(response.body);
          this.addCompany.emit(true);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.editResult.emit(null);
        }
      )
    } else {
      this.companyService.create(this.company).subscribe(
        (response: HttpResponse<Company>) => {
          this.createdCompany.emit(response.body);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
    if (this.form.valid) {
      this.form.reset();
    }

  }
  cancel() {
    this.clearData();
    this.editResult.emit(null);
  }

  clearData() {
    this.company = null;
    this.companyEdit = this.company;
    this.address = "";
    this.image = "";
    this.municipality = "";
    this.department = "";
    this.form.reset();
  }


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

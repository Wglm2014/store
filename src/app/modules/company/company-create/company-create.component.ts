import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Municipality } from 'src/app/models/municipality';
import { DepartmentService } from 'src/app/services/department.service';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  departments: Department[];
  municipalities: Municipality[];
  reduceMunicipalities: Municipality[];
  municipality = new FormControl();
  department = new FormControl();
  company: Company = new Company();

  filteredDepartment: Observable<Department[]>;
  filteredMunicipality: Observable<Municipality[]>;

  @Output() createdCompany = new EventEmitter<Company>();


  constructor(private departmentService: DepartmentService,
    private municipalityService: MunicipalityService,
    private companyService: CompanyService,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.departmentService.findAll().subscribe(
      (response: HttpResponse<Department[]>) => { this.departments = response.body },
      (error: HttpErrorResponse) => { console.log(error) }
    );

    this.municipalityService.findAll().subscribe(
      (response: HttpResponse<Municipality[]>) => { this.municipalities = response.body },
      (error: HttpErrorResponse) => { console.log(error) }
    );

    this.filteredDepartment = this.department.valueChanges
      .pipe(startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(value => value ? this._filter(value, this.departments) : this.departments.slice())
      );
    this.filteredMunicipality = this.municipality.valueChanges
      .pipe(startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(value => value ? this._filter(value, this.municipalities) : this.municipalities.slice())
      );

    this.reduceMunicipalities = this.municipalities;
  }
  private _filter(value: string, data: Department[] | Municipality[]): Department[] {
    const filterValue = value.toLowerCase();
    return data.filter(option => option.title.toLowerCase().indexOf(filterValue));
  }
  save() {
    this.companyService.create(this.company).subscribe(
      (response: HttpResponse<Company>) => {
        this.createdCompany.emit(response.body);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  filterMunicipality(title: string) {
    const thisDepartment = this.departments.filter(item => { if (item.title === title) { return item } });
    this.reduceMunicipalities = thisDepartment[0]['municipalities'];
  }

}

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from '../../models/department';
import { Municipality } from '../../models/municipality';
import { DepartmentService } from '../../services/department.service';
import { MunicipalityService } from '../../services/municipality.service';

@Component({
  selector: 'department-municipality',
  templateUrl: './department-municipality.component.html',
  styleUrls: ['./department-municipality.component.css']
})
export class DepartmentMunicipalityComponent implements OnInit {
  departments: Department[];
  municipalities: Municipality[];
  filteredDepartment: any[];
  filteredMunicipality: any[];
  @Input("municipality") municipality: string;
  @Input("department") department: string;
  @Input("address") address: string = "";

  @Output() editedAddress = new EventEmitter<string>();
  @Output() editedDepartment = new EventEmitter<string>();
  @Output() editedMunicipality = new EventEmitter<string>();

  reduceMunicipalities: Municipality[];

  constructor(private departmentService: DepartmentService,
    private municipalityService: MunicipalityService,) { }

  ngOnInit(): void {
    this.departmentService.findAll().subscribe(
      (response: HttpResponse<Department[]>) => {
        this.departments = response.body
        console.log(this.department)
      },
      (error: HttpErrorResponse) => { return error }
    );

    this.municipalityService.findAll().subscribe(
      (response: HttpResponse<Municipality[]>) => { this.municipalities = response.body },
      (error: HttpErrorResponse) => { console.log(error) }
    );
  }

  filterMunicipalities(title: string) {
    const thisDepartment = this.departments.filter(item => { if (item.title === title) { return item } });
    this.reduceMunicipalities = thisDepartment[0]['municipalities'];
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
        // console.log(municipality);
      }
    }
  }

  onEnterAddress() {
    this.editedAddress.emit(this.address);
  }

  onEnterDepartment() {
    this.editedDepartment.emit(this.department);
  }
  onEnterMunicipality() {
    this.editedAddress.emit(this.municipality);
  }
}

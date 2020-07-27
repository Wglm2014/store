import { Component, OnInit, ViewChild, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Municipality } from 'src/app/models/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'municipality-create',
  templateUrl: './municipality-create.component.html',
  styleUrls: ['./municipality-create.component.css']
})
export class MunicipalityCreateComponent implements OnInit, OnChanges {
  municipality: Municipality = new Municipality();
  @Input("dataMunicipality") dataMunicipality: Municipality;
  @Input("dataDepartment") data: Department;


  @ViewChild("editForm") form: any;

  @Output() hideCreate = new EventEmitter<boolean>();

  toggle() {
    this.hideCreate.emit(true);
  }

  @Output() newMunicipality = new EventEmitter<Municipality>();


  constructor(private municipalityService: MunicipalityService,
    private router: Router) {

  }

  ngOnInit(): void {
    console.log("init child");
    console.log(this.data);

  }
  ngOnChanges() {
    this.municipality = new Municipality();
    if (this.dataMunicipality) {
      this.municipality = this.dataMunicipality;
    }
    console.log(this.dataMunicipality);
  }

  save() {
    this.municipality.departmentId = this.data.id;
    this.municipalityService.create(this.municipality).subscribe(
      (response: HttpResponse<Municipality>) => {
        // this.municipality = response.body;
        console.log(response.body)
        this.newMunicipality.emit(response.body);
      },
      (error: HttpErrorResponse) => { console.log(error.message) }
    );

    if (this.form.valid) {
      this.form.reset();
    }

  }

}

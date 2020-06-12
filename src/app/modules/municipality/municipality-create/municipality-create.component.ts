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
  @Input("dataDepartment") data: Department;

  @ViewChild("editForm") form: any;

  @Output() hideCreate = new EventEmitter<boolean>();
  toggle() {
    this.hideCreate.emit(true);
  }

  constructor(private municipalityService: MunicipalityService,
    private router: Router) {
    console.log("constructor child");
  }

  ngOnInit(): void {
    console.log("init child");
    console.log(this.data);

  }
  ngOnChanges() {
    console.log(this.data);
  }

  save() {
    this.municipality.departmentId = this.data.id;
    console.log(this.municipality)
    this.municipalityService.create(this.municipality).subscribe(
      (response: HttpResponse<Municipality>) => {
        this.router.navigate(["municipality/", this.data.id, this.data.title])
      },
      (error: HttpErrorResponse) => { console.log(error.message) }
    );
    if (this.form.valid) {
      this.form.reset();
    }

  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Municipality } from 'src/app/models/municipality';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Department } from 'src/app/models/department';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit, OnDestroy {
  municipalities: Municipality[];
  department: Department = new Department();
  hideCreate: boolean = true;
  totalRecords: any;
  routeSub: any;
  noMunicipalities: string;


  constructor(private municipalityService: MunicipalityService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    console.log("contructor parent");
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.activeRoute.params.subscribe(
      (params) => {
        console.log("init parent");
        console.log(params);
        this.department.id = params.id;
        this.department.title = params.title;
        this.municipalityService.findByDepartmentId(params.id, null).subscribe(
          (response: HttpResponse<Municipality[]>) => {
            this.totalRecords = response.headers.get('X-Total-Count');
            this.municipalities = response.body;
            this.noMunicipalities = "";

            console.log(response.body);
          },
          (error: HttpErrorResponse) => {
            this.noMunicipalities = "No existen municipalidades para este departamento";
            console.log(error);
          }

        )
      },
      (error: HttpErrorResponse) => console.log(error)

    );
  }

  toggle() {
    this.hideCreate = !this.hideCreate;
  }

  backDepartment() {
    this.router.navigateByUrl('department');
  }

}

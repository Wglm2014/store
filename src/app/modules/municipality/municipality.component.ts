import { Component, OnInit, OnDestroy } from '@angular/core';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Municipality } from 'src/app/models/municipality';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit, OnDestroy {
  municipalities: Municipality[]; // list of municipalities already recorded in the DB
  municipality: Municipality;
  department: Department = new Department(); //variable to hold the department the municipalities belong
  hideCreate: boolean = true;
  totalRecords: any;
  routeSub: any;

  noMunicipalities: string; // string to display if there is no municipalities

  formTitle: string; // string to display as a header if is addgin or editing


  constructor(private municipalityService: MunicipalityService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    console.log("contructor parent");
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.activeRoute.queryParams.subscribe(
      (params) => {
        console.log("init parent");
        console.log(JSON.stringify(params));
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

  onDelete(id: number) {
    // console.log("deleting");
    this.municipalityService.delete(id).subscribe(
      (response: any) => {
        this.municipalities = this.municipalities.filter(municipality => {
          return municipality.id !== response.body.id;
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )


  }
  onUpdate(data: Municipality) {
    this.formTitle = "Edite";
    this.municipality = data;
    this.hideCreate = false;
  }

  newMunicipality(municipality: Municipality) {
    if (this.formTitle === "Agregue") {
      this.municipalities.push(municipality);
    } else {
      const index = this.municipalities.findIndex(item => { return item.id === municipality.id })
      this.municipalities[index].title = municipality.title;
      this.municipalities[index].longTitle = municipality.longTitle;
    }

  }
  toggle() {
    this.municipality = new Municipality();
    this.formTitle = "Agregue";
    this.hideCreate = !this.hideCreate;
  }

  backDepartment() {
    this.router.navigateByUrl('department');
  }

}

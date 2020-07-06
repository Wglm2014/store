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
  municipalityClone: { [s: string]: Municipality } = {};

  department: Department = new Department(); //variable to hold the department the municipalities belong
  hideCreate: boolean = true;
  hideParent: boolean = false;
  totalRecords: any;
  routeSub: any;
  editing: boolean = false;
  noMunicipalities: string; // string to display if there is no municipalities

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
    this.municipalityService.update(data).subscribe(
      (res: any) => {
        delete this.municipalityClone[data.id];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      })
    // this.municipality = data;


  }

  newMunicipality(municipality: Municipality) {
    this.municipalities.push(municipality);
    // const index = this.municipalities.findIndex(item => { return item.id === municipality.id })
    // this.municipalities[index].title = municipality.title;
    // this.municipalities[index].longTitle = municipality.longTitle;

  }
  toggle() {
    // this.municipality = new Municipality();
    this.hideCreate = !this.hideCreate;
  }

  backDepartment() {
    this.router.navigateByUrl('department');
  }

  onRowEditInit(municipality: Municipality) {
    this.municipalityClone[municipality.id] = { ...municipality };
  }
  onRowEditCancel(municiaplity: Municipality, index: number) {
    this.municipalities[index] = this.municipalityClone[municiaplity.id];
    delete this.municipalityClone[municiaplity.id];
  }

}

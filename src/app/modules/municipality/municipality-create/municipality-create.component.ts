import { Component, OnInit } from '@angular/core';
import { Municipality } from 'src/app/models/municipality';

@Component({
  selector: 'municipality-create',
  templateUrl: './municipality-create.component.html',
  styleUrls: ['./municipality-create.component.css']
})
export class MunicipalityCreateComponent implements OnInit {

  municipality: Municipality = new Municipality();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: [""]
      },
      {
        label: 'Mantenimineto',
        items: [
          { label: 'Compañias', routerLink: ["company"] },
          { label: 'Sucursales', routerLink: ["branch"] },
          { label: 'Departamentos y Municipios', routerLink: ["department"] }
        ]
      }
    ]
  }
}


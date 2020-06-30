import { Component, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [

      {
        label: 'Ventas',
        items: [
          { label: 'Apertura de Caja' },
          { label: 'Ventas' },
          { label: 'Cierre De Caja' }
        ]
      },
      {
        label: 'Inventario',
        items: [
          { label: 'Ingreso de Mercaderia' },
          { label: 'Listado de Productos' },
          { label: 'Categorias de Productos' }
        ]
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
  goHome() {
    this.router.navigate([""]);
  }
}


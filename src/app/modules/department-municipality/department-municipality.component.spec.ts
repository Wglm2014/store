import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMunicipalityComponent } from './department-municipality.component';

describe('DepartmentMunicipalityComponent', () => {
  let component: DepartmentMunicipalityComponent;
  let fixture: ComponentFixture<DepartmentMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityCreateComponent } from './municipality-create.component';

describe('MunicipalityCreateComponent', () => {
  let component: MunicipalityCreateComponent;
  let fixture: ComponentFixture<MunicipalityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

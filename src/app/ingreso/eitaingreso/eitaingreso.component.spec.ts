import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EitaingresoComponent } from './eitaingreso.component';

describe('EitaingresoComponent', () => {
  let component: EitaingresoComponent;
  let fixture: ComponentFixture<EitaingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EitaingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EitaingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

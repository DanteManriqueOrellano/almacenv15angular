import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaingresoComponent } from './listaingreso.component';

describe('ListaingresoComponent', () => {
  let component: ListaingresoComponent;
  let fixture: ComponentFixture<ListaingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

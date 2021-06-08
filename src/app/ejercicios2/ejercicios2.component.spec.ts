import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicios2Component } from './ejercicios2.component';

describe('Ejercicios2Component', () => {
  let component: Ejercicios2Component;
  let fixture: ComponentFixture<Ejercicios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicios2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

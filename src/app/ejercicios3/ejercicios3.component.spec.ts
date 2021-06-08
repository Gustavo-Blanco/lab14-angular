import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicios3Component } from './ejercicios3.component';

describe('Ejercicios3Component', () => {
  let component: Ejercicios3Component;
  let fixture: ComponentFixture<Ejercicios3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicios3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicios3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicios1Component } from './ejercicios1.component';

describe('Ejercicios1Component', () => {
  let component: Ejercicios1Component;
  let fixture: ComponentFixture<Ejercicios1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicios1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

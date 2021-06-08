import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicios1Component } from './ejercicios1/ejercicios1.component';
import { Ejercicios2Component } from './ejercicios2/ejercicios2.component';
import { Ejercicios3Component } from './ejercicios3/ejercicios3.component';

const routes: Routes = [
  { path: 'ejercicio01', component: Ejercicios1Component },
  { path: 'ejercicio02', component: Ejercicios2Component },
  { path: 'ejercicio03', component: Ejercicios3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

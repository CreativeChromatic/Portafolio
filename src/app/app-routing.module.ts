import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescubrenosComponent } from './descubrenos/descubrenos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
    {path: '', component: DescubrenosComponent},
    {path: 'home', component: DescubrenosComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

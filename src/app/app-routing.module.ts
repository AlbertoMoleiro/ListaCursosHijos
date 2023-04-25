import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

const routes: Routes = [
    { path: '', component: ListaCursosComponent, children: [
        { path: 'alta', component: DetalleCursoComponent },
        { path: 'modify/:id', component: DetalleCursoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

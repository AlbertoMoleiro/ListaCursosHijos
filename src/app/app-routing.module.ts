import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: ListaCursosComponent },
    { path: 'detalle-curso', component: DetalleCursoComponent },
    { path: '**', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

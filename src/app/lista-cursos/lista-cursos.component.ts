import { Component } from '@angular/core';
import { Course } from '../_models/Course';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-lista-cursos',
    templateUrl: './lista-cursos.component.html',
    styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
    courses: Course[] = [];

    constructor(private coursesService: CoursesService, private router: Router) {
       
    }
    ngOnInit(): void {
        this.courses = this.coursesService.courses;
    }

    goDetalle(id: number, action: string) {
        this.router.navigate(['/detalle-curso'], { queryParams: { id: id, action: action } });

    }

    deleteCourse(course: Course) {
        this.coursesService.removeCourse(course);
        this.courses = this.coursesService.courses;
    }

}

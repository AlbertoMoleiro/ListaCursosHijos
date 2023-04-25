import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course, Level } from '../_models/Course';




@Component({
    selector: 'app-detalle-curso',
    templateUrl: './detalle-curso.component.html',
    styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent {

    action: string | null = "";
    id: number = 0;
    course: any;
    name: string = 'Name';
    duration: number = 0;
    level: Level = Level.BEGINNER;

    levels: Level[] = Object.values(Level);


    constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            this.action = params.get('action');
            this.id = Number(params.get('id'));

            if (this.action === 'modify') {
                this.course = this.coursesService.getCourseById(Number(this.id));
                this.name = this.course.name;
                this.duration = this.course.duration;
                this.level = this.course.level;
            }


        });
    }


    updateCourse(): void {
        this.course.name = this.name;
        this.course.duration = this.duration;
        this.course.level = this.level;
        this.coursesService.updateCourse(this.course);
        this.router.navigate(['/lista-cursos']);
    }

    addCourse(): void {

        this.coursesService.addCourse(new Course(this.name, this.duration, this.level));
        this.router.navigate(['/lista-cursos']);

    }

}

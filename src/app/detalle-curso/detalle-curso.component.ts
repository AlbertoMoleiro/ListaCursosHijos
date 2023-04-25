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

    id: number = 0;
    course: any;
    name: string = 'Name';
    duration: number = 0;
    level: Level = Level.BEGINNER;

    levels: Level[] = Object.values(Level);

    sub: any;

    constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }
    ngOnInit(): void {
        this.sub = this.route.paramMap;
        this.sub.subscribe((params: ParamMap) => {
            this.id = Number(params.get('id'));
            if (this.id != 0) {
                this.course = this.coursesService.getCourseById(Number(this.id));
                this.name = this.course.name;
                this.duration = this.course.duration;
                this.level = this.course.level;
            }
        }
        );
    }


    updateCourse(): void {
        this.course.name = this.name;
        this.course.duration = this.duration;
        this.course.level = this.level;
        this.coursesService.updateCourse(this.course);
    }

    addCourse(): void {
        this.coursesService.addCourse(new Course(this.name, this.duration, this.level));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

import { Injectable } from '@angular/core';
import { Course, Level } from '../_models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses: Course[] = [
    new Course('Angular', 40, Level.ADVANCED),
    new Course('React', 10, Level.BEGINNER),
    new Course('Spring', 70, Level.INTERMEDIATE)
  ]

  constructor() { }

  public get courses(): Course[] {
    return this._courses;
  }


  public addCourse(course: Course): void {
    console.log(this._courses);
    this._courses.push(course);
  }

  public removeCourse(course: Course): void {
    this._courses = this._courses.filter(c => c !== course);
  }

  public updateCourse(course: Course): void {
    this._courses.map(c => c === course ? course : c);
  }



  public getCourseById(id: number): any {
    return this._courses.find(c => c.id === id);
  }

}

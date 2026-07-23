import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    'Angular',
    'React',
    'Spring Boot',
    'Machine Learning',
    'Python'
  ];

  getCourses() {
    return this.courses;
  }

}
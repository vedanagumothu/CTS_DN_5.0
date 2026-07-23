import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  constructor(private router: Router) {}

  courses = [
    {
      id: 1,
      name: 'Angular',
      instructor: 'John',
      duration: '6 Weeks'
    },
    {
      id: 2,
      name: 'React',
      instructor: 'David',
      duration: '5 Weeks'
    },
    {
      id: 3,
      name: 'Spring Boot',
      instructor: 'Alice',
      duration: '8 Weeks'
    }
  ];

  goToCourse(id: number) {
    this.router.navigate(['/courses', id]);
  }
}
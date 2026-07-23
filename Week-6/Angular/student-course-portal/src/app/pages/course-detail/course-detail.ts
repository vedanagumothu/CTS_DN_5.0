import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {

  courseId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.courseId = this.route.snapshot.paramMap.get('id');
  }

}
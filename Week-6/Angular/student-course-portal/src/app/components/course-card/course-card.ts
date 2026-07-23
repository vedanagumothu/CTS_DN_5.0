import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() courseName = '';

  @Output() enroll = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['courseName']?.currentValue);
  }

  enrollCourse() {
    this.enroll.emit();
  }

}
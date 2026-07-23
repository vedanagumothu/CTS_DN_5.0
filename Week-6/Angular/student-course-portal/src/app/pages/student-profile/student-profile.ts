import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  student = {
    id: 101,
    name: 'Veda Varshitha',
    department: 'CSE - Data Science',
    year: '3rd Year',
    email: 'veda@example.com'
  };

}
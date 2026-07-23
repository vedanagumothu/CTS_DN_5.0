import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'about', component: About },

  { path: 'contact', component: Contact },

  { path: 'dashboard', component: Dashboard },

  { path: 'profile', component: StudentProfile },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail }
    ]
  },

  { path: '**', component: NotFound }

];
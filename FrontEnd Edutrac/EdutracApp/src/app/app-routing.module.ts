import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'login/student', component: LoginStudentComponent },
  { path: 'login/instructor', component: LoginInstructorComponent },
  { path: 'instructor-dashboard', component: InstructorDashboardComponent }
  // Add more routes as needed
];

// ,canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

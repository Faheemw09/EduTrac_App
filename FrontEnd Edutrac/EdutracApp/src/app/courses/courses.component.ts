import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // Define an array to store course data
  constructor(private http: HttpClient) {
    
  }
  ngOnInit() {
    // Fetch the list of courses when the component initializes
   this.fetchCourses()
    
  }
  courses: any[] = [];
  fetchCourses() {
    this.http.get<any[]>('http://localhost:5050/course/')
      .subscribe((courses) => {
        this.courses = courses;
      }, (error) => {
        console.error('Error fetching courses', error);
      });
  }
  
}

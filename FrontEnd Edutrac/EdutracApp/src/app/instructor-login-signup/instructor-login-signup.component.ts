import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-login-signup',
  templateUrl: './instructor-login-signup.component.html',
  styleUrls: ['./instructor-login-signup.component.css']
})




export class InstructorLoginSignupComponent {
  isLoginForm = true; // Start with login form

 
  name: string;
  gender: string;
  dateofbirth: string;
  department: string;
  email: string;
  contactnumber: string;
  password: string;

  constructor(private http: HttpClient) {}

  login() {
    // Implement login logic here (e.g., send a POST request to your backend)
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('/your-backend-api/login', loginData).subscribe((response: any) => {
      console.log('Login response:', response);
      // Handle the response from the backend (e.g., store authentication token, navigate to a new page)
      // You can access data from the response like response.token if your backend returns a token
    }, (error) => {
      console.error('Login error:', error);
      // Handle errors, display messages, etc.
    });
  }

  signup() {
    // Implement signup logic here (e.g., send a POST request to your backend)
    const signupData = {
      name: this.name,
      gender: this.gender,
      dateofbirth: this.dateofbirth,
      department: this.department,
      email: this.email,
      contactnumber: this.contactnumber,
      password: this.password
    };

    this.http.post('/your-backend-api/signup', signupData).subscribe((response: any) => {
      console.log('Signup response:', response);
      // Handle the response from the backend (e.g., display a success message, navigate to a login page)
    }, (error) => {
      console.error('Signup error:', error);
      // Handle errors, display messages, etc.
    });
  }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }
}

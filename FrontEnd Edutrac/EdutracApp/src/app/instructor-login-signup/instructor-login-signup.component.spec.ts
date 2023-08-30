import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLoginSignupComponent } from './instructor-login-signup.component';

describe('InstructorLoginSignupComponent', () => {
  let component: InstructorLoginSignupComponent;
  let fixture: ComponentFixture<InstructorLoginSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorLoginSignupComponent]
    });
    fixture = TestBed.createComponent(InstructorLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

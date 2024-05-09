import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab4Page implements OnInit {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    contact: '1234567890',
    rollNumber: 'ABC123',
    hsc: {
      college: 'ABC High School',
      yearOfPassing: 2018,
      totalMarks: 480,
      outOfMarks: 500,
    },
    ssc: {
      college: 'XYZ Secondary School',
      yearOfPassing: 2016,
      totalMarks: 550,
      outOfMarks: 600,
    },
    semesterMarks: [
      {
        cgpa: 8.5,
        percentage: 85,
      },
      {
        cgpa: 9.2,
        percentage: 92,
      },
      {
        cgpa: 8.7,
        percentage: 87,
      },
      {
        cgpa: 9.1,
        percentage: 91,
      },
      {
        cgpa: 8.9,
        percentage: 89,
      },
    ],
    resume: 'path/to/resume.pdf',
    additionalCourses: 'Course 1, Course 2',
  };
  constructor() {}

  ngOnInit() {}
  viewResume() {}
  calculatePercentage(marks: any, outof: any) {}
  saveProfile() {}
}

export interface User {
  name: string;
  email: string;
  contact: string;
  rollNumber: string;
  password: string;
  hsc: {
    college: string;
    yearOfPassing: number;
    totalMarks: number;
    outOfMarks: number;
  };
  ssc: {
    college: string;
    yearOfPassing: number;
    totalMarks: number;
    outOfMarks: number;
  };
  semesterMarks: {
    number: number;
    cgpa: number;
    percentage: number;
  }[];
  resume?: string; // Path to the resume file
  additionalCourses: string;
}

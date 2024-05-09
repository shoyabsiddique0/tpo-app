export interface Job {
  company: string; // Reference to the Company document
  title: string;
  description: string;
  requirements: string[];
  skills: string[];
  type: 'Full-time' | 'Part-time' | 'Internship';
  location: string;
  salaryRange: {
    min?: number;
    max?: number;
  };
  postedAt?: Date;
  applicationDeadline: Date;
  isActive?: boolean;
  minimumCGPA?: number;
  maximumBacklogs?: number;
  eligibleDepartments?: string[];
}

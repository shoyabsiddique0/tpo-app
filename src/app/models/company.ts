export interface Company {
  name: string;
  location: string;
  salaryRange: {
    min?: number;
    max?: number;
  };
  profile?: string;
}

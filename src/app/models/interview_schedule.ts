import { InterviewSlot } from './interview_slot';

export interface InterviewSchedule {
  interviewId: number;
  company: string; // Reference to the Company document
  candidates: {
    candidateId: string; // Reference to the User document
    interviewSlot: InterviewSlot;
  }[];
}

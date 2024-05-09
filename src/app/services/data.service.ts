import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  _data = [
    {
      interviewId: 1,
      company: {
        name: 'Acme Corporation',
        location: 'New York, NY',
        jobRole: 'Developer',
      },
      candidates: [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          interviewSlot: {
            date: '2023-06-15',
            startTime: '09:00',
            endTime: '10:00',
          },
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          interviewSlot: {
            date: '2023-06-15',
            startTime: '10:30',
            endTime: '11:30',
          },
        },
      ],
    },
    {
      interviewId: 2,
      company: {
        name: 'Globex Corp',
        location: 'San Francisco, CA',
        jobRole: 'Developer',
      },
      candidates: [
        {
          name: 'Michael Johnson',
          email: 'michael.johnson@example.com',
          interviewSlot: {
            date: '2023-06-20',
            startTime: '14:00',
            endTime: '15:00',
          },
        },
        {
          name: 'Emily Wilson',
          email: 'emily.wilson@example.com',
          interviewSlot: {
            date: '2023-06-20',
            startTime: '15:30',
            endTime: '16:30',
          },
        },
      ],
    },
    {
      interviewId: 3,
      company: {
        name: 'TechGiant Inc.',
        location: 'Seattle, WA',
        jobRole: 'Engineering',
      },
      candidates: [
        {
          name: 'David Thompson',
          email: 'david.thompson@example.com',
          interviewSlot: {
            date: '2023-06-22',
            startTime: '10:00',
            endTime: '11:30',
          },
        },
        {
          name: 'Samantha Lee',
          email: 'samantha.lee@example.com',
          interviewSlot: {
            date: '2023-06-22',
            startTime: '14:00',
            endTime: '15:30',
          },
        },
      ],
    },
    {
      interviewId: 4,
      company: {
        name: 'Innovatech Solutions',
        location: 'Boston, MA',
        jobRole: 'Devops Development',
      },
      candidates: [
        {
          name: 'Robert Brown',
          email: 'robert.brown@example.com',
          interviewSlot: {
            date: '2023-06-25',
            startTime: '09:00',
            endTime: '10:30',
          },
        },
      ],
    },
    {
      interviewId: 5,
      company: {
        name: 'CyberSec Corp',
        location: 'San Diego, CA',
        jobRole: 'Flutter Development Team Lead',
      },
      candidates: [
        {
          name: 'Jessica Garcia',
          email: 'jessica.garcia@example.com',
          interviewSlot: {
            date: '2023-06-28',
            startTime: '11:00',
            endTime: '12:30',
          },
        },
        {
          name: 'Andrew Martinez',
          email: 'andrew.martinez@example.com',
          interviewSlot: {
            date: '2023-06-28',
            startTime: '14:30',
            endTime: '16:00',
          },
        },
      ],
    },
    {
      interviewId: 6,
      company: {
        name: 'FinTech Innovations',
        location: 'Chicago, IL',
        jobRole: 'Flutter Developer',
      },
      candidates: [
        {
          name: 'Olivia Taylor',
          email: 'olivia.taylor@example.com',
          interviewSlot: {
            date: '2023-06-30',
            startTime: '10:00',
            endTime: '11:30',
          },
        },
        {
          name: 'William Anderson',
          email: 'william.anderson@example.com',
          interviewSlot: {
            date: '2023-06-30',
            startTime: '14:00',
            endTime: '15:30',
          },
        },
      ],
    },
  ];

  _interviewSchedule = [
    {
      interviewId: 1,
      company: {
        name: 'Acme Corporation',
        location: 'New York, NY',
      },
      candidates: [
        {
          candidateId: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          interviewSlot: {
            date: '2023-06-15',
            startTime: '09:00',
            endTime: '10:00',
          },
        },
        {
          candidateId: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          interviewSlot: {
            date: '2023-06-15',
            startTime: '10:30',
            endTime: '11:30',
          },
        },
      ],
    },
    {
      interviewId: 2,
      company: {
        name: 'Globex Corp',
        location: 'San Francisco, CA',
      },
      candidates: [
        {
          candidateId: 3,
          name: 'Michael Johnson',
          email: 'michael.johnson@example.com',
          interviewSlot: {
            date: '2023-06-20',
            startTime: '14:00',
            endTime: '15:00',
          },
        },
        {
          candidateId: 4,
          name: 'Emily Wilson',
          email: 'emily.wilson@example.com',
          interviewSlot: {
            date: '2023-06-20',
            startTime: '15:30',
            endTime: '16:30',
          },
        },
      ],
    },
  ];

  get interveiewSchedule() {
    return this._interviewSchedule;
  }
  get data() {
    return this._data;
  }
  constructor() {}
}

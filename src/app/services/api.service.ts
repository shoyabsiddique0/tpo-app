import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Company } from '../models/company';
import { Job } from '../models/job';
import { InterviewSchedule } from '../models/interview_schedule';
import firebase from 'firebase/compat/app';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseError } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // Replace with your API base URL

  public user: User | undefined;
  constructor(
    public ngFireAuth: AngularFireAuth,
    public toastController: ToastController,
    public router: Router,
    private http: HttpClient
  ) {}
  async register(userData: User) {
    return await this.ngFireAuth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .catch((err) => {
        this.presentAlert(err);
      })
      .then(async () => {
        this.user = userData;
        console.log(userData);

        await this.registerUser(this.user).subscribe(
          async (data) => {
            console.log(data);
            this.router.navigate(['/tabs/tab1']);
            await this.presentAlert('Welcome ' + data.name);
          },
          (err) => {
            console.log(err);
          }
        );
      });
  }
  async presentAlert(reason: any) {
    const alert = await this.toastController.create({
      message: reason,
      duration: 3000,
    });
    await alert.present();
  }
  async login(email: string, password: string) {
    return await this.ngFireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err: FirebaseError) => {
        this.presentAlert(err.message);
      })
      .then(async () => {
        this.getUserByEmail(email).subscribe((user) => {
          this.user = user;
          this.router.navigate(['/tabs/tab1']);
        });
      });
  }
  async logout() {
    return await this.ngFireAuth.signOut();
  }
  async getCurrentUser() {
    return await this.ngFireAuth.currentUser;
  }
  async sendPasswordResetEmail(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }
  // User routes
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/register`, user);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/email/${email}`);
  }

  updateUserByEmail(
    email: string,
    updatedData: Partial<User>
  ): Observable<User> {
    return this.http.put<User>(
      `${this.baseUrl}/users/email/${email}`,
      updatedData
    );
  }

  deleteUserByEmail(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/email/${email}`);
  }

  // Company routes
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.baseUrl}/companies/add`, company);
  }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies/fetch`);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/companies/fetch/${id}`);
  }

  updateCompany(
    id: string,
    updatedData: Partial<Company>
  ): Observable<Company> {
    return this.http.put<Company>(
      `${this.baseUrl}/companies/update/${id}`,
      updatedData
    );
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/companies/delete/${id}`);
  }

  // Job routes
  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}/jobs/add`, job);
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/jobs/fetch`);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/jobs/fetch/${id}`);
  }

  updateJob(id: string, updatedData: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.baseUrl}/jobs/update/${id}`, updatedData);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/jobs/delete/${id}`);
  }

  // Interview Schedule routes
  scheduleInterview(
    interview: InterviewSchedule
  ): Observable<InterviewSchedule> {
    return this.http.post<InterviewSchedule>(
      `${this.baseUrl}/interviews/`,
      interview
    );
  }

  getAllInterviews(): Observable<InterviewSchedule[]> {
    return this.http.get<InterviewSchedule[]>(
      `${this.baseUrl}/interviews/fetch`
    );
  }

  getInterviewById(id: string): Observable<InterviewSchedule> {
    return this.http.get<InterviewSchedule>(
      `${this.baseUrl}/interviews/fetch/${id}`
    );
  }

  updateInterview(
    id: string,
    updatedData: Partial<InterviewSchedule>
  ): Observable<InterviewSchedule> {
    return this.http.put<InterviewSchedule>(
      `${this.baseUrl}/interviews/update/${id}`,
      updatedData
    );
  }

  cancelInterview(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/interviews/delete/${id}`);
  }
}

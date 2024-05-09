import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  name: string = '';
  email: string = '';
  password: string = '';
  contact: string = '';
  rollNumber: string = '';
  hscCollege: string = '';
  hscYearOfPassing: number | undefined;
  hscTotalMarks: number | undefined;
  hscOutOfMarks: number | undefined;
  sscCollege: string = '';
  sscYearOfPassing: number | undefined;
  sscTotalMarks: number | undefined;
  sscOutOfMarks: number | undefined;
  semesterNumber: number | undefined;
  cgpa: number | undefined;
  percentage: number | undefined;
  resume: string = '';
  additionalCourses: string = '';
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private api: ApiService,
    public loadingController: LoadingController,
    public router: Router
  ) {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    console.log(this.auth.user?.email);
    if (this.auth.user?.email != undefined) {
      this.router.navigate(['/tabs/tab1']);
    }
  }

  change(event: any) {
    this.screen = event;
  }

  async login() {
    // var formData: any = new FormData();
    // if (this.formData.valid) {
    //   this.isLoading = true;
    //   formData.append('email', this.formData.get('email')?.value);
    //   formData.append('password', this.formData.get('password')?.value);
    //   console.log(this.formData);
    //   // this.auth.userLogin(formData).subscribe((data: any) => {
    //   //   console.log(data);
    //   // });
    // }
    const loading = await this.loadingController.create();
    await loading.present();
    var user: any;
    try {
      user = await this.auth.login(this.email, this.password);
    } catch (err) {
      console.log(err);
    }

    loading.dismiss();
  }

  async register() {
    // var formData: any = new FormData();
    // if (this.formData.valid) {
    //   this.isLoading = true;
    //   formData.append('name', this.formData.get('name')?.value);
    //   formData.append('email', this.formData.get('email')?.value);
    //   formData.append('password', this.formData.get('password')?.value);
    //   console.log(this.formData);
    //   // this.auth.userRegister(formData).subscribe((data: any) => {
    //   //   console.log(data);
    //   // });
    // }
    const loading = await this.loadingController.create();
    await loading.present();
    const user1: User = {
      name: this.name,
      email: this.email,
      contact: this.contact,
      rollNumber: this.rollNumber,
      password: this.password,
      hsc: {
        college: this.hscCollege,
        yearOfPassing: this.hscYearOfPassing!,
        totalMarks: this.hscTotalMarks!,
        outOfMarks: this.hscOutOfMarks!,
      },
      ssc: {
        college: this.sscCollege,
        yearOfPassing: this.sscYearOfPassing!,
        totalMarks: this.sscTotalMarks!,
        outOfMarks: this.sscOutOfMarks!,
      },
      semesterMarks: [
        {
          number: this.semesterNumber!,
          cgpa: this.cgpa!,
          percentage: this.percentage!,
        },
      ],
      additionalCourses: this.additionalCourses,
      resume: this.resume,
    };
    await this.api.register(user1);

    loading.dismiss();
  }
}

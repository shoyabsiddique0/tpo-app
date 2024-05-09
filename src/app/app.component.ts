import { Component, NgModule, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    AngularFireModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    DataService,
    ApiService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // AngularFireModule.initializeApp(environment.firebaseConfig);
  }
}

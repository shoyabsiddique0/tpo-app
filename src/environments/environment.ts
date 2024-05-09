// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD7AW-eUY1tSJSWewoVgbpcfNWcEJRopzc',
    authDomain: 'tpo-app-2763a.firebaseapp.com',
    projectId: 'tpo-app-2763a',
    storageBucket: 'tpo-app-2763a.appspot.com',
    messagingSenderId: '302653049870',
    appId: '1:302653049870:web:8c43c586bd2a1c1346c05f',
    measurementId: 'G-DPBWX4KSBP',
  },
};

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

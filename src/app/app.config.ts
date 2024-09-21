import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'little-linguist-frontend-proj',
        appId: '1:164845557174:web:054e6994c46907bf59dd17',
        storageBucket: 'little-linguist-frontend-proj.appspot.com',
        apiKey: 'AIzaSyC_sq-ZHLJo043QWF5zvjq523oer0lulKg',
        authDomain: 'little-linguist-frontend-proj.firebaseapp.com',
        messagingSenderId: '164845557174',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};

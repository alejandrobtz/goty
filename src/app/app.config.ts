import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "apiKey":"AIzaSyCQNTuUFtBg1UzZ3k2IpFB7GBGz6SVe_0Q",
      "authDomain":"firestore-chart-919bd.firebaseapp.com",
      "projectId":"firestore-chart-919bd",
      "appId":"1:187964004218:web:c839d8eb2b4d1c618b68c3",
      "storageBucket":"firestore-chart-919bd.appspot.com",
      "messagingSenderId":"187964004218"}))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};

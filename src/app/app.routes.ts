import { Routes } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPrimeComponent } from './video-prime/video-prime.component';

export const routes: Routes = [
  { path: '', component: VideoListComponent }, // Page d'accueil
  { path: 'primes', component: VideoPrimeComponent }, // Page des primes
];

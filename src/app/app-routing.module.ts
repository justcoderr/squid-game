import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InfowowComponent } from './components/pages/infowow/infowow.component';
import { PagenotFounfComponent } from './components/pages/pagenot-founf/pagenot-founf.component';
import { PersonnagesComponent } from './components/pages/personnages/personnages.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { TeamComponent } from './components/pages/team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personnages', component: PersonnagesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'infowow', component: InfowowComponent },
  {path: '404', component: PagenotFounfComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

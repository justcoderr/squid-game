import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { FotterComponent } from './components/includes/fotter/fotter.component';
import { TitleComponent } from './components/items/title/title.component';
import { SimplCardComponent } from './components/items/simpl-card/simpl-card.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ParagrapheComponent } from './components/items/paragraphe/paragraphe.component';
import { SectionimgComponent } from './components/items/sectionimg/sectionimg.component';
import { ButtonComponent } from './components/items/button/button.component';
import { HeaderComponent } from './components/items/header/header.component';
import { PersonnagesComponent } from './components/pages/personnages/personnages.component';
import { TeamComponent } from './components/pages/team/team.component';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { InfowowComponent } from './components/pages/infowow/infowow.component';
import { IframComponent } from './components/items/ifram/ifram.component';
import { DataService } from './services/data.service';
import { PagenotFounfComponent } from './components/pages/pagenot-founf/pagenot-founf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotterComponent,
    SimplCardComponent,
    TitleComponent,
    HomeComponent,
    ParagrapheComponent,
    SectionimgComponent,
    ButtonComponent,
    HeaderComponent,
    PersonnagesComponent,
    TeamComponent,
    EpisodeComponent,
    ReviewsComponent,
    InfowowComponent,
    IframComponent,
    PagenotFounfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

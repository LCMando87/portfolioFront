import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { StudiesComponent } from './componentes/studies/studies.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component'
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    StudiesComponent,
    ExperienceComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

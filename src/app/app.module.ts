import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { MentalComponent } from './components/mental/mental.component';
import { AcneComponent } from './components/acne/acne.component';
import { CovidComponent } from './components/covid/covid.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AuthGuard } from './services/auth.guard';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { NgxPaginationModule } from 'ngx-pagination' 



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    FitnessComponent,
    MentalComponent,
    AcneComponent,
    CovidComponent,
    NutritionComponent,
    DashboardComponent,
    SignupComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    BlogsComponent,
    FileuploaderComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

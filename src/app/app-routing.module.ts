import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { MentalComponent } from './components/mental/mental.component';
import { AcneComponent } from './components/acne/acne.component';
import { CovidComponent } from './components/covid/covid.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acne', component: AcneComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'mental', component: MentalComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'dashboard', children:
  [{path:'', component: DashboardComponent },
  {path: ':id', component: UserProfileComponent}]},
  {path:'signup', component:SignupComponent},
  {path:'blog', component:TutorialListComponent},
  {path:'add',component:AddTutorialComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'details',component:TutorialDetailsComponent},
  {path:'user-profile/:id',component:UserProfileComponent},
  {path:'fileuploader',component: FileuploaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

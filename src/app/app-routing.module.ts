
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildGuidesLayoutComponent } from './explore/build-guides-layout.component';
import { CompletedBuildsLayoutComponent } from './explore/completed-builds-layout.component';
import { HomeLayoutComponent } from './explore/home-layout.component';
import { RegisterLayoutComponent } from './explore/register-layout.component';
import { SystemBuilderLayoutComponent } from './explore/system-builder-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'home', component: HomeLayoutComponent },
  { path: 'system-builder', component: SystemBuilderLayoutComponent },
  { path: 'build-guides', component: BuildGuidesLayoutComponent },
  { path: 'completed-builds', component: CompletedBuildsLayoutComponent },
  { path: 'register', component: RegisterLayoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
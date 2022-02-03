import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { BuildGuidesFrontCardComponent } from './navigation/buildguidesfrontcard.component';
import { ButtonComponent } from './navigation/button.component';
import { CompletedBuildsFrontCardComponent } from './navigation/completedbuildsfrontcard.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    BuildGuidesFrontCardComponent,
    CompletedBuildsFrontCardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

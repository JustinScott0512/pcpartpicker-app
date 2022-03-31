import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { BuildGuidesFrontCardComponent } from './explore/buildguidesfrontcard.component';
import { ButtonComponent } from './explore/button.component';
import { CompletedBuildsFrontCardComponent } from './explore/completedbuildsfrontcard.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './explore/home-layout.component';
import { SystemBuilderLayoutComponent } from './explore/system-builder-layout.component';
import { BuildGuidesLayoutComponent } from './explore/build-guides-layout.component';
import { CompletedBuildsLayoutComponent } from './explore/completed-builds-layout.component';
import { RegisterLayoutComponent } from './explore/register-layout.component';
import { SystemBuilderButtonComponent } from './explore/system-builder-button.component';
import { SystemBuilderCategoryComponent } from './explore/system-builder-category.component';
import { SystemBuilderActionBoxComponent } from './explore/system-builder-actionbox.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from 'src/environments/environment';
import { SystemBuilderPricesComponent } from './explore/system-builder-prices/system-builder-prices.component';
import { PartformComponent } from './explore/partform/partform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    BuildGuidesFrontCardComponent,
    CompletedBuildsFrontCardComponent,
    ButtonComponent,
    HomeLayoutComponent,
    SystemBuilderLayoutComponent,
    BuildGuidesLayoutComponent,
    CompletedBuildsLayoutComponent,
    RegisterLayoutComponent,
    SystemBuilderButtonComponent,
    SystemBuilderCategoryComponent,
    SystemBuilderActionBoxComponent,
    SystemBuilderPricesComponent,
    PartformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

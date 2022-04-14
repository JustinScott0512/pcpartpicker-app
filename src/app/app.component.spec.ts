import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { BuildGuidesFrontCardComponent } from './explore/buildguidesfrontcard.component';
import { ButtonComponent } from './explore/button.component';
import { CompletedBuildsFrontCardComponent } from './explore/completedbuildsfrontcard.component';
import { HomeLayoutComponent } from './explore/home-layout.component';
import { BuildGuidesLayoutComponent } from './explore/build-guides-layout.component';
import { CompletedBuildsLayoutComponent } from './explore/completed-builds-layout.component';
import { LoginComponent } from './explore/login/login.component';
import { PartformComponent } from './explore/partform/partform.component';
import { RegisterLayoutComponent } from './explore/register-layout.component';
import { SystemBuilderActionBoxComponent } from './explore/system-builder-actionbox.component';
import { SystemBuilderButtonComponent } from './explore/system-builder-button.component';
import { SystemBuilderCategoryComponent } from './explore/system-builder-category.component';
import { SystemBuilderLayoutComponent } from './explore/system-builder-layout.component';
import { SystemBuilderPricesComponent } from './explore/system-builder-prices/system-builder-prices.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        PartformComponent,
        LoginComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pcpartpicker-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pcpartpicker-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pcpartpicker-app app is running!');
  });

  it('should render text "unit test hello"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content p')?.textContent).toContain('unit test hello');
  });

  it('app should not be undefined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined;
  });

  it('app should not throw errors', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).not.toThrowError;
  });

  it('Generated app should be an instance of AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeInstanceOf(AppComponent);
  });

});

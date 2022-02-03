import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { BuildGuidesFrontCardComponent } from './navigation/buildguidesfrontcard.component';
import { ButtonComponent } from './navigation/button.component';
import { CompletedBuildsFrontCardComponent } from './navigation/completedbuildsfrontcard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TopNavBarComponent,
        BottomNavBarComponent,
        BuildGuidesFrontCardComponent,
        CompletedBuildsFrontCardComponent,
        ButtonComponent
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
});

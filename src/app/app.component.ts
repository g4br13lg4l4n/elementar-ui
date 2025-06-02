import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PageLoadingBarComponent } from '@elementar-ui/components/page-loading-bar';
import {
  ThemeManagerService
} from '@elementar-ui/components/core';
import {
  LayoutBodyComponent,
  LayoutComponent
} from '@elementar-ui/components/layout';
import { SplashScreenComponent } from '@elementar-ui/components/splash-screen';
import { TextLogoComponent } from '@elementar-ui/components/logo';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [
    PageLoadingBarComponent,
    LayoutBodyComponent,
    LayoutComponent,
    SplashScreenComponent,
    TextLogoComponent,
    LoginComponent,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected _themeManager = inject(ThemeManagerService);
  private _router = inject(Router);

  constructor() {
    afterNextRender(() => {
      // Scroll a page to top if url changed
      this._router.events
        .pipe(
          filter(event=> event instanceof NavigationEnd)
        )
        .subscribe(() => {
          window.scrollTo({
            top: 0,
            left: 0
          });
        })
      ;
    });
  }

  ngOnInit(): void {
    this._themeManager.setColorScheme(this._themeManager.getPreferredColorScheme());
    
  }
}

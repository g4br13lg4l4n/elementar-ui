import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PageLoadingBarComponent } from '@elementar-ui/components/page-loading-bar';
import {
  SoundEffectDirective,
  ThemeManagerService
} from '@elementar-ui/components/core';
import { AnnouncementGlobalComponent } from '@elementar-ui/components/announcement';
import { IncidentsContainerComponent } from '@elementar-ui/components/incidents';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutSidebarComponent, LayoutTopbarComponent
} from '@elementar-ui/components/layout';
import { SidebarComponent } from '@app/sidebar/sidebar.component';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { LogoComponent, TextLogoComponent } from '@elementar-ui/components/logo';
import { SplashScreenComponent } from '@elementar-ui/components/splash-screen';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageLoadingBarComponent,
    AnnouncementGlobalComponent,
    IncidentsContainerComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutTopbarComponent,
    SidebarComponent,
    MatIcon,
    SoundEffectDirective,
    MatTooltip,
    RouterLink,
    MatIconButton,
    LogoComponent,
    SplashScreenComponent,
    TextLogoComponent,
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
    
    /** Track canonical changes for SEO
     * */
    //this._seoService.trackCanonicalChanges(this._envService.getValue('siteUrl'));
    
    /*
    * Track page views with Google Analytics
    * */
    // this._analyticsService.trackPageViews();
  }
}

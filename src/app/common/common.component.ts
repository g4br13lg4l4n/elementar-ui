import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '@app/sidebar/sidebar.component';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
} from '@elementar-ui/components/layout';
import { AnnouncementGlobalComponent } from '@elementar-ui/components/announcement';
import { IncidentsContainerComponent } from '@elementar-ui/components/incidents';
import { PanelHeaderComponent } from '@elementar-ui/components/panel';

@Component({
  selector: 'emr-common',
  imports: [
    RouterOutlet,
    PanelHeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutTopbarComponent,
    IncidentsContainerComponent,
    AnnouncementGlobalComponent
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {
}

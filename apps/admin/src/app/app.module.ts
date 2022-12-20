import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { PartiesModule } from '@ana01-parties';
import { ForwarderComponent } from '@ana01-parties';
import { ShipperComponent } from '@ana01-parties';
import { ImporterComponent } from '@ana01-parties';
import { OceanImportComponent } from '@ana01/modes';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
        PartiesModule,
        ForwarderComponent,
        ShipperComponent,
        ImporterComponent,
        OceanImportComponent
    ]
})
export class AppModule {}

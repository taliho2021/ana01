import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PartiesModule } from '@ana01-parties';
import { ImporterComponent } from '@ana01-parties';
import { ShipperComponent } from '@ana01-parties';
import { ForwarderComponent } from '@ana01-parties';
import { ModesModule } from '@ana01/modes';
import { OceanImportComponent } from "../../../../libs/modes/src/lib/ocean-import/ocean-import.component";

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        PartiesModule,
        ModesModule,
        ImporterComponent, ShipperComponent, ForwarderComponent, OceanImportComponent]
})
export class AppModule {}

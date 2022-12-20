import { Route } from '@angular/router';
import { ImporterComponent } from './importer/importer.component';
import { ShipperComponent } from './shipper/shipper.component';

export const partiesRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {path:'shipper', pathMatch: 'full', component: ShipperComponent},
  {path: 'importer', pathMatch: 'full', component: ImporterComponent}
];

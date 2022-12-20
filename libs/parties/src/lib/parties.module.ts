import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { partiesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(partiesRoutes)],
})
export class PartiesModule {}

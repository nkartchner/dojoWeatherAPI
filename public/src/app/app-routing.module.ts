import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dc', component: DcComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: '', pathMatch: 'full', redirectTo: '/seattle' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NewComponent } from './pet/new/new.component';
import { EditComponent } from './pet/edit/edit.component';
import { DetailsComponent } from './pet/details/details.component';
import { DashboardComponent } from './pet/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'pets', component: DashboardComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component:  DetailsComponent},
  { path: 'pets/:id/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

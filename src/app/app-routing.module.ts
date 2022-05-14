import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category.component';
import { AngularInfoComponent } from './angular-stuff.component';

const routes: Routes = [
  { path: 'category', component: AddCategoryComponent },
  { path: 'angular', component: AngularInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

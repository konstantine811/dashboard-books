import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { BooksDashboardComponent } from './views/books-dashboard/books-dashboard.component';
import { InfoBookComponent } from './views/info-book/info-book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksDashboardComponent
  },
  {
    path: 'info-book',
    component: InfoBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

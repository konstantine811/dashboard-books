import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
import { BooksDashboardComponent } from './views/books-dashboard/books-dashboard.component';

//services
import { BackEndService } from './services/back-end.service';
import { BookService } from './services/book.service';
import { ChartBookComponent } from './shared/chart-book/chart-book.component';
import { InfoBookComponent } from './views/info-book/info-book.component';

@NgModule({
  declarations: [AppComponent, BooksDashboardComponent, ChartBookComponent, InfoBookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [BackEndService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pet/dashboard/dashboard.component';
import { NewComponent } from './pet/new/new.component';
import { EditComponent } from './pet/edit/edit.component';
import { DetailsComponent } from './pet/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

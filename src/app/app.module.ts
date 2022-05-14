import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AddCategoryComponent} from './add-category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgMaterialModule} from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './app-config-service';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

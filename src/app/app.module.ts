import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainComponent } from './main/main.component'
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule
} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { TrainingPanelComponent } from './training-panel/training-panel.component'

@NgModule({
  declarations: [AppComponent, MainComponent, TrainingPanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    //UI
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

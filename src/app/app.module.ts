import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { BaitapComponent } from './baitap/baitap.component';
import { from } from 'rxjs';
import { Baitap2Component } from './baitap2/baitap2.component';

@NgModule({
  declarations: [
    AppComponent,
    BaitapComponent,
    Baitap2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: BaitapComponent},
      {path:'baitap', component: BaitapComponent},
      {path:'baitap2', component: Baitap2Component},
      {path:'**', redirectTo:'', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

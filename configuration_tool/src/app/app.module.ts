import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { MicroPinoutDialogComponent } from './components/micro-pinout-dialog/micro-pinout-dialog.component';
import { FuseBitComponent } from './components/fuse-bit/fuse-bit.component';
import { GptCfgConfigComponent } from './components/gpt-config/gpt-config.component';
import { MaterialModule } from './modules/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    GptCfgConfigComponent,
    HomeComponent,
    MicroPinoutDialogComponent,
    FuseBitComponent
  ],
  entryComponents: [
    MicroPinoutDialogComponent,
    GptCfgConfigComponent,
    FuseBitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';
import { LogMessageComponent } from './components/log-message/log-message.component';
import { FuseBitCardComponent } from './components/fuse-bit-card/fuse-bit-card.component';
import { AvrTechnicalSpecificationCardComponent } from './components/avr-technical-specification-card/avr-technical-specification-card.component';
import { MicroSelectorComponent } from './components/micro-selector/micro-selector.component';
import { MicroImageShowComponent } from './components/micro-image-show/micro-image-show.component';


@NgModule({
  declarations: [
    AppComponent,
    GptCfgConfigComponent,
    HomeComponent,
    MicroPinoutDialogComponent,
    FuseBitComponent,
    LogMessageComponent,
    FuseBitCardComponent,
    AvrTechnicalSpecificationCardComponent,
    MicroSelectorComponent,
    MicroImageShowComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

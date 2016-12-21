import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardWaterComponent } from './card-water/card-water.component';
import { CardWaterHeaderComponent } from './card-water-header/card-water-header.component';
import { CardWaterTableComponent } from './card-water-table/card-water-table.component';
import { WaterStatusDirective } from './water-status.directive';
import { FabMenuComponent } from './fab-menu/fab-menu.component';
import { FabMenuScssComponent } from './fab-menu-scss/fab-menu-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    CardWaterComponent,
    CardWaterHeaderComponent,
    CardWaterTableComponent,
    WaterStatusDirective,
    FabMenuComponent,
    FabMenuScssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

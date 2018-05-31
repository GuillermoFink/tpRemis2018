import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './modulos/primeng/primeng.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

const config: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "mapa",
    component: MapaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvAqOdPIPCsYogT5L_4VcKHDeCrcNjpFM'
    }),
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

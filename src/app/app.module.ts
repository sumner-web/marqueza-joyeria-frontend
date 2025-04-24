import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { AnuncioPrincipalComponent } from './anuncio-principal/anuncio-principal.component';
import { InstagramGalleryComponent } from './instagram-gallery/instagram-gallery.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    AnuncioPrincipalComponent,
    InstagramGalleryComponent,
    TerminosComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

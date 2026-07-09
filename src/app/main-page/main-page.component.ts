import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { KontaktComponent } from "../components/kontakt/kontakt.component";
import { ProdukteComponent } from "../components/produkte/produkte.component";
import { VerarbeitungComponent } from "../components/verarbeitung/verarbeitung.component";
import { HerkunftComponent } from "../components/herkunft/herkunft.component";
import { HeroComponent } from "../components/hero/hero.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-main-page',
  imports: [FooterComponent, KontaktComponent, ProdukteComponent, VerarbeitungComponent, HerkunftComponent, HeroComponent, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}

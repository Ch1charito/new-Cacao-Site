import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HerkunftComponent } from "./components/herkunft/herkunft.component";
import { VerarbeitungComponent } from "./components/verarbeitung/verarbeitung.component";
import { ProdukteComponent } from "./components/produkte/produkte.component";
import { KontaktComponent } from "./components/kontakt/kontakt.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, HerkunftComponent, VerarbeitungComponent, ProdukteComponent, KontaktComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cacao-ecuador';
}

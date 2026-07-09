import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datenschutz',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

}

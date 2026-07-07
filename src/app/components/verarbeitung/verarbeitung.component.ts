import { Component, AfterViewInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-verarbeitung',
  imports: [TranslatePipe],
  templateUrl: './verarbeitung.component.html',
  styleUrls: ['./verarbeitung.component.scss']
})
export class VerarbeitungComponent implements AfterViewInit {

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }
}

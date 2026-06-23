import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.scss']
})
export class ProdukteComponent implements AfterViewInit {

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 150);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }
}

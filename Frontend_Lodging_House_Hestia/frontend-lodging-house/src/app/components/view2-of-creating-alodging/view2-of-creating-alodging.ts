import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view2-of-creating-alodging',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // 👈 agrega CommonModule
  templateUrl: './view2-of-creating-alodging.html',
  styleUrls: ['./view2-of-creating-alodging.css'],
})
export class View2OfCreatingALodgingComponent {
  model = { guests: null as number | null };

  services = [
    { name: 'Wifi', selected: false },
    { name: 'Cocina', selected: false },
    { name: 'Estacionamiento', selected: false },
    { name: 'Piscina', selected: false },
    { name: 'Gimnasio', selected: false },
    { name: 'TV', selected: false },
  ];

  // opcional: para performance en *ngFor
  trackByIdx = (i: number) => i;

  constructor(private router: Router) {}
  back() { this.router.navigateByUrl('/view1OfCreatingALodgingComponent'); }
  next() { this.router.navigateByUrl('/view3OfCreatingALodgingComponent'); }
}

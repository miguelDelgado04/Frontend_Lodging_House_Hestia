import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-failure-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './backup-failure-view.html',
  styleUrls: ['./backup-failure-view.css'],
})
export class BackupFailureViewComponent {
  constructor(private router: Router) {}

  // Accesibilidad: Enter = reintentar
  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent){
    if (e.key === 'Enter') {
      this.router.navigateByUrl('/reservationCreationViewComponent');
    }
  }
}

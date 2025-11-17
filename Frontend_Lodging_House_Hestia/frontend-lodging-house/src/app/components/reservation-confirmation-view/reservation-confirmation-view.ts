import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-confirmation-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reservation-confirmation-view.html',
  styleUrls: ['./reservation-confirmation-view.css'],
})
export class ReservationConfirmationViewComponent {

  constructor(private router: Router) {}

  // Accesibilidad: Esc = cancelar, Enter = confirmar
  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent){
    if (e.key === 'Escape') {
      this.router.navigateByUrl('/reservationCreationViewComponent');
    }
    if (e.key === 'Enter') {
      this.router.navigateByUrl('/bookingSuccessViewComponent');
    }
  }
}

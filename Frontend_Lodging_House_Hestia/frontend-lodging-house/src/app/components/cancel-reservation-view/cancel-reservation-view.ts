import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cancel-reservation-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cancel-reservation-view.html',
  styleUrls: ['./cancel-reservation-view.css'],
})
export class CancelReservationViewComponent {

  constructor(private router: Router) {}

  onConfirm(): void {
    // Aquí luego podrás llamar a tu servicio de cancelación.
    // De momento solo navego al historial:
    this.router.navigate(['/reservationHistoryViewComponent']);
  }

  onKeep(): void {
    // Mantener la reserva: vuelve al historial / pantalla anterior
    this.router.navigate(['/reservationHistoryViewComponent']);
  }
}

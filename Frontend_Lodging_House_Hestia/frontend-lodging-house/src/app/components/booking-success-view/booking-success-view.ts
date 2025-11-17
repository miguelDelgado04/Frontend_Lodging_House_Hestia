import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-success-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './booking-success-view.html',
  styleUrls: ['./booking-success-view.css'],
})
export class BookingSuccessViewComponent {
  constructor(private router: Router) {}

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.router.navigateByUrl('/reservationHistoryViewComponent');
    }
  }
}

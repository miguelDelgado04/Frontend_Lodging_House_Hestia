import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Status = 'pending' | 'confirmed' | 'cancelled';

interface Reservation {
  id: number;
  property: string;
  start: Date;
  end: Date;
  status: Status;
  image: string;
}

@Component({
  selector: 'app-reservation-history-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reservation-history-view.html',
  styleUrls: ['./reservation-history-view.css'],
})
export class ReservationHistoryViewComponent {
  tab: 'upcoming' | 'past' = 'upcoming';

  /** Mock data – puse fechas futuras para que se vean en "Próximos" */
  all: Reservation[] = [
    {
      id: 1,
      property: 'Casa de Campo',
      start: new Date('2026-07-15'),
      end: new Date('2026-07-20'),
      status: 'pending',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      property: 'Apartamento de Playa',
      start: new Date('2026-08-01'),
      end: new Date('2026-08-05'),
      status: 'confirmed',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      property: 'Cabaña de Montaña',
      start: new Date('2024-09-10'),
      end: new Date('2024-09-15'),
      status: 'cancelled',
      image:
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  private get upcoming(): Reservation[] {
    const today = new Date();
    return this.all.filter(r => r.end >= today);
  }

  private get past(): Reservation[] {
    const today = new Date();
    return this.all.filter(r => r.end < today);
  }

  get list(): Reservation[] {
    return this.tab === 'upcoming' ? this.upcoming : this.past;
  }

  fmtRange(r: Reservation): string {
    const opts: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const s = r.start.toLocaleDateString('es-ES', opts);
    const e = r.end.toLocaleDateString('es-ES', opts);
    return `${s} - ${e}`;
  }

  badge(r: Reservation): string {
    switch (r.status) {
      case 'pending':
        return 'Pendiente';
      case 'confirmed':
        return 'Confirmada';
      default:
        return 'Cancelada';
    }
  }
}

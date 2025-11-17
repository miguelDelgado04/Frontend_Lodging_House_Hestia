import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface PropertyMetrics {
  name: string;
  reservations: number;
  rating: number;
  revenue: number; // en USD
}

@Component({
  selector: 'app-host-metrics-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './host-metrics-view.html',
  styleUrls: ['./host-metrics-view.css'],
})
export class HostMetricsViewComponent {
  // filtros de selects (solo visuales)
  selectedListingScope = 'all';
  selectedRange = '30';

  properties: PropertyMetrics[] = [
    {
      name: 'Apartamento Encantador en el Centro',
      reservations: 5,
      rating: 4.9,
      revenue: 750,
    },
    {
      name: 'Cabaña Acogedora en el Bosque',
      reservations: 3,
      rating: 4.7,
      revenue: 450,
    },
    {
      name: 'Villa Frente al Mar con Vista al Océano',
      reservations: 4,
      rating: 4.6,
      revenue: 1200,
    },
  ];

  totalReservations = 12;
  reservationsChange = +10; // %
  avgRating = 4.8;
  ratingChange = -2; // %

  get formattedTotalRevenue(): string {
    const total = this.properties.reduce((acc, p) => acc + p.revenue, 0);
    return `$${total.toLocaleString('en-US')}`;
  }

  // porcentaje para el donut (sobre 5 estrellas)
  get ratingPercent(): number {
    return (this.avgRating / 5) * 100;
  }
}

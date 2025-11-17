import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Status = 'activo' | 'inactivo';

interface Accommodation {
  id: number;
  title: string;
  city: string;
  country: string;
  status: Status;
  photo: string;
}

@Component({
  selector: 'app-host-accommodation-list-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './host-accommodation-list-view.html',
  styleUrls: ['./host-accommodation-list-view.css'],
})
export class HostAccommodationListViewComponent {
  // Buscador
  query = '';

  // Datos mock (puedes alimentarlo desde tu servicio más adelante)
  accommodations: Accommodation[] = [
    {
      id: 1,
      title: 'Acogedor apartamento en el centro',
      city: 'Madrid',
      country: 'España',
      status: 'activo',
      photo:
        'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d40?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Casa de campo con vistas',
      city: 'Sierra Nevada',
      country: 'España',
      status: 'inactivo',
      photo:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Estudio moderno cerca de la playa',
      city: 'Barcelona',
      country: 'España',
      status: 'activo',
      photo:
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Apartamento de lujo con piscina',
      city: 'Marbella',
      country: 'España',
      status: 'activo',
      photo:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  filtered: Accommodation[] = [...this.accommodations];

  applyFilter(): void {
    const q = this.query.trim().toLowerCase();
    this.filtered = !q
      ? [...this.accommodations]
      : this.accommodations.filter(a =>
          `${a.title} ${a.city} ${a.country}`.toLowerCase().includes(q)
        );
  }

  createNew(): void {
    // Aquí iría router.navigate(['/host/create']) o abrir modal
    alert('Crear nuevo alojamiento (wire up a tu flujo).');
  }

  edit(a: Accommodation): void {
    // router.navigate(['/host/edit', a.id])
    alert(`Editar: ${a.title}`);
  }

  remove(a: Accommodation): void {
    const ok = confirm(`¿Eliminar "${a.title}"?`);
    if (!ok) return;
    this.accommodations = this.accommodations.filter(x => x.id !== a.id);
    this.applyFilter();
  }
}

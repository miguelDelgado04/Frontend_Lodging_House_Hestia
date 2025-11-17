import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view3-of-creating-alodging',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view3-of-creating-alodging.html',
  styleUrls: ['./view3-of-creating-alodging.css'],
})
export class View3OfCreatingALodgingComponent {
  // En una app real, esto vendría de un servicio o del estado de pasos anteriores.
  summary = {
    title: 'Cabaña de ensueño en el bosque',
    description:
      'Disfruta de la tranquilidad de esta cabaña de ensueño, rodeada de naturaleza y con todas las comodidades para una estancia inolvidable.',
    location: 'Valle Escondido, Provincia de Buenos Aires, Argentina',
    services: ['Wifi', 'Piscina', 'Chimenea', 'Cocina equipada', 'Estacionamiento gratuito'],
    price: 150
  };

  constructor(private router: Router) {}

  edit() {
    // Volver al paso 2 para editar
    this.router.navigateByUrl('/view2OfCreatingALodgingComponent');
  }

  publish() {
    // Aquí iría la llamada al backend. Por ahora, redirigimos a la lista del anfitrión.
    // TODO: integrar servicio de publicación (HTTP) y manejo de estado/toast.
    this.router.navigateByUrl('/host-accommodation-list-view');
  }
}

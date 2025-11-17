import { Component } from '@angular/core';

@Component({
  selector: 'app-hosting-deletion-confirmation-view',
  standalone: true,
  templateUrl: './hosting-deletion-confirmation-view.html',
  styleUrls: ['./hosting-deletion-confirmation-view.css'],
})
export class HostingDeletionConfirmationViewComponent {
  cancel(): void {
    alert('Operación cancelada');
    // Aquí podrías cerrar el modal o navegar atrás
  }

  confirm(): void {
    alert('Alojamiento eliminado correctamente');
    // Aquí implementas la eliminación real o llamas al servicio backend
  }
}

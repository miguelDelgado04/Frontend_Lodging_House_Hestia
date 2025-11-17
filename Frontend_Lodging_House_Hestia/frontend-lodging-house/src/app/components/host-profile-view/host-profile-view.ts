import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-host-profile-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './host-profile-view.html',
  styleUrls: ['./host-profile-view.css']
})
export class HostProfileViewComponent {

  // ===== Datos del anfitrión (pueden venir del backend) =====
  host = {
    nombre: 'Carlos',
    apellido: 'Sánchez',
    email: 'carlos.sanchez@email.com',
    telefono: '+34 123 456 789',
    nacimiento: '1985-05-20',
    descripcion: '¡Hola! Soy un apasionado de los viajes y me encanta recibir a gente de todo el mundo. Mi objetivo es que te sientas como en casa.',
    foto: '',
  };

  // ===== Estado interno =====
  documentoSubido = false;
  nombreDocumento = '';

  // ===== Métodos =====
  onGuardarCambios(): void {
    console.log('Datos actualizados:', this.host);
    alert('Cambios guardados correctamente ✅');
  }

  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.documentoSubido = true;
      this.nombreDocumento = input.files[0].name;
      console.log('Documento seleccionado:', this.nombreDocumento);
    }
  }

  onSubirDocumento(): void {
    if (this.documentoSubido) {
      alert(`Documento "${this.nombreDocumento}" subido correctamente ✅`);
    } else {
      alert('Por favor, selecciona un archivo antes de subirlo.');
    }
  }

  onCambiarFoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.host.foto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

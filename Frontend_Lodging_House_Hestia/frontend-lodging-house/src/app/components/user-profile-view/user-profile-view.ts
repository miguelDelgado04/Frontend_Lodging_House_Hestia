import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-view',
  standalone: true,
  templateUrl: './user-profile-view.html',
  styleUrls: ['./user-profile-view.css'],
})
export class UserProfileViewComponent {
  onAvatarChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (!file) return;

    // aquí podrías previsualizar o subir el archivo
    // console.log('Avatar:', file.name);
  }
}


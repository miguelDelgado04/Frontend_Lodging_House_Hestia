import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-view.html',
  styleUrls: ['./login-view.css'],
})
export class LoginViewComponent {}


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-error-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-error-view.html',
  styleUrls: ['./login-error-view.css'],
})
export class LoginErrorViewComponent {}


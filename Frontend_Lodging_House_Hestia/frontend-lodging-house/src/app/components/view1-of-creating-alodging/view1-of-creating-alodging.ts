import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view1-of-creating-alodging',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './view1-of-creating-alodging.html',
  styleUrls: ['./view1-of-creating-alodging.css'],
})
export class View1OfCreatingALodgingComponent {
  model = { title: '', description: '', address: '', price: null as number | null };

  constructor(private router: Router) {}

  cancel() {
    this.router.navigateByUrl('/host-accommodation-list-view');
  }

  next() {
    this.router.navigateByUrl('/view2OfCreatingALodgingComponent');
  }
}

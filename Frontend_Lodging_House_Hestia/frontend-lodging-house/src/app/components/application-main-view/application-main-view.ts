import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Amenity = 'Wifi' | 'Kitchen' | 'Washer' | 'Parking' | 'Pool' | 'TV';
type SortKey = 'relevance' | 'priceAsc' | 'priceDesc';

interface Listing {
  id: number;
  title: string;
  city: string;
  state: string;
  price: number;         // nightly price
  image: string;
  amenities: Amenity[];
  favorite?: boolean;
}

@Component({
  selector: 'app-application-main-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-main-view.html',
  styleUrls: ['./application-main-view.css'],
})
export class ApplicationMainViewComponent {
  // --- data (mock) ---
  listings = signal<Listing[]>([
    {
      id: 1,
      title: 'Cozy Apartment in the Heart of the City',
      city: 'San Francisco',
      state: 'CA',
      price: 150,
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Wifi', 'Kitchen', 'Washer'],
    },
    {
      id: 2,
      title: 'Modern Room with a View',
      city: 'San Francisco',
      state: 'CA',
      price: 100,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Wifi', 'TV'],
    },
    {
      id: 3,
      title: 'Charming House with Garden',
      city: 'San Francisco',
      state: 'CA',
      price: 200,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Parking', 'Kitchen', 'TV'],
    },
    {
      id: 4,
      title: 'Luxury Villa with Pool',
      city: 'San Francisco',
      state: 'CA',
      price: 400,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Pool', 'Wifi', 'Parking'],
    },
    {
      id: 5,
      title: 'Rustic Cabin in the Woods',
      city: 'San Francisco',
      state: 'CA',
      price: 120,
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Kitchen', 'TV', 'Parking'],
    },
    {
      id: 6,
      title: 'Quaint Cottage by the Sea',
      city: 'San Francisco',
      state: 'CA',
      price: 180,
      image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1200&auto=format&fit=crop',
      amenities: ['Washer', 'Wifi', 'Kitchen'],
    },
  ]);

  // --- filters / ui state ---
  query = signal('');
  sortKey = signal<SortKey>('relevance');

  // price range
  readonly globalMin = 50;
  readonly globalMax = 500;
  priceMin = signal(this.globalMin);
  priceMax = signal(300);

  // city list + selection
  cities = computed(() =>
    Array.from(new Set(this.listings().map(l => `${l.city}, ${l.state}`))).sort()
  );
  selectedCity = signal<string | ''>('');

  // dates (placeholder UI – no lógica aún)
  checkIn = signal<string>('');
  checkOut = signal<string>('');

  // amenities toggles
  amenities: Amenity[] = ['Wifi', 'Kitchen', 'Washer', 'Parking', 'Pool', 'TV'];
  amenityOn = signal<Record<Amenity, boolean>>({
    Wifi: false, Kitchen: false, Washer: false, Parking: false, Pool: false, TV: false
  });

  // --- derived results ---
  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const city = this.selectedCity();
    const min = this.priceMin();
    const max = this.priceMax();
    const on = this.amenityOn();

    const activeAmenities = (Object.keys(on) as Amenity[]).filter(a => on[a]);

    let res = this.listings().filter(l =>
      l.price >= min && l.price <= max &&
      (!city || `${l.city}, ${l.state}` === city) &&
      (!q || `${l.title} ${l.city} ${l.state}`.toLowerCase().includes(q)) &&
      (activeAmenities.length === 0 || activeAmenities.every(a => l.amenities.includes(a)))
    );

    switch (this.sortKey()) {
      case 'priceAsc':  res = res.sort((a,b)=>a.price-b.price); break;
      case 'priceDesc': res = res.sort((a,b)=>b.price-a.price); break;
      default: /* relevance - keep as is */ break;
    }
    return res;
  });

  countLabel = computed(() => {
    const n = this.filtered().length;
    // para el mockup mostramos "1,234" si quisieras simular; aquí usamos real:
    return new Intl.NumberFormat().format(n);
  });

  // --- actions ---
  toggleAmenity(a: Amenity) {
    const next = { ...this.amenityOn() };
    next[a] = !next[a];
    this.amenityOn.set(next);
  }

  resetFilters() {
    this.selectedCity.set('');
    this.query.set('');
    this.checkIn.set('');
    this.checkOut.set('');
    this.priceMin.set(this.globalMin);
    this.priceMax.set(this.globalMax);
    this.amenityOn.set({ Wifi:false, Kitchen:false, Washer:false, Parking:false, Pool:false, TV:false });
    this.sortKey.set('relevance');
  }

  toggleFavorite(l: Listing, ev: MouseEvent) {
    ev.stopPropagation();
    l.favorite = !l.favorite;
    this.listings.set([...this.listings()]); // trigger signal
  }
}

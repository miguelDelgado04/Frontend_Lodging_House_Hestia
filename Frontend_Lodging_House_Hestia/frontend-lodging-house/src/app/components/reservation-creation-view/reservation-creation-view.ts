import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type DayCell = {
  date: Date | null;
  label: number | '';
  inCurrentMonth: boolean;
  isToday: boolean;
  isStart: boolean;
  isEnd: boolean;
  inRange: boolean;
  disabled: boolean; // ← añadido: días pasados/bloqueados
};

@Component({
  selector: 'app-reservation-creation-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-creation-view.html',
  styleUrls: ['./reservation-creation-view.css'],
})
export class ReservationCreationViewComponent {
  // UI rating (mock)
  rating = 4.85;
  reviews = 122;

  // Guests
  adults = 1;
  children = 0;

  // Pricing
  pricePerNight = 125;
  cleaningFee = 50;
  serviceFee = 30;

  // Calendar view state
  viewYear: number;
  viewMonth: number; // 0..11
  grid: DayCell[][] = [];

  // Selected range
  checkIn: Date | null = null;
  checkOut: Date | null = null;

  // ===== Bloqueos =====
  // Días sueltos bloqueados (EJEMPLO: modifica o deja vacío)
  blockedDates: Date[] = [
    // new Date(2025, 9, 24),
    // new Date(2025, 9, 26),
  ];
  // Rangos bloqueados [inicio, fin] (inclusive)
  blockedRanges: [Date, Date][] = [
    // [new Date(2025, 9, 10), new Date(2025, 9, 12)],
  ];

  constructor() {
    const today = new Date();
    this.viewYear = today.getFullYear();
    this.viewMonth = today.getMonth();
    this.rebuildGrid();
  }

  // ===== Helpers de fecha =====
  private atStart(d: Date) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }
  private isSameDay(a: Date, b: Date) {
    return this.atStart(a).getTime() === this.atStart(b).getTime();
  }
  private isWithin(d: Date, a: Date, b: Date) {
    const t = this.atStart(d).getTime();
    return t >= this.atStart(a).getTime() && t <= this.atStart(b).getTime();
  }

  private isPast(d: Date): boolean {
    const today = this.atStart(new Date());
    return this.atStart(d).getTime() < today.getTime();
  }
  private isBlocked(d: Date): boolean {
    if (this.blockedDates.some(b => this.isSameDay(b, d))) return true;
    if (this.blockedRanges.some(([a, b]) => this.isWithin(d, a, b))) return true;
    return false;
  }
  private isDisabled(d: Date): boolean {
    return this.isPast(d) || this.isBlocked(d);
  }

  // ===== Construcción de la grilla =====
  private rebuildGrid() {
    const first = new Date(this.viewYear, this.viewMonth, 1);
    const startWeekday = (first.getDay() + 6) % 7; // Monday=0 ... Sunday=6
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();

    const cells: DayCell[] = [];

    // Leading blanks
    for (let i = 0; i < startWeekday; i++) {
      cells.push({
        date: null, label: '', inCurrentMonth: false, isToday: false,
        isStart: false, isEnd: false, inRange: false, disabled: true,
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(this.viewYear, this.viewMonth, d);
      const today = new Date();
      const isToday =
        dt.getFullYear() === today.getFullYear() &&
        dt.getMonth() === today.getMonth() &&
        dt.getDate() === today.getDate();

      cells.push({
        date: dt,
        label: d,
        inCurrentMonth: true,
        isToday,
        isStart: false,
        isEnd: false,
        inRange: false,
        disabled: this.isDisabled(dt),
      });
    }

    // Trailing blanks
    while (cells.length % 7 !== 0) {
      cells.push({
        date: null, label: '', inCurrentMonth: false, isToday: false,
        isStart: false, isEnd: false, inRange: false, disabled: true,
      });
    }

    // Aseguramos 6 semanas visibles
    while (cells.length < 42) {
      cells.push({
        date: null, label: '', inCurrentMonth: false, isToday: false,
        isStart: false, isEnd: false, inRange: false, disabled: true,
      });
    }

    // Partimos en semanas
    this.grid = [];
    for (let i = 0; i < cells.length; i += 7) {
      this.grid.push(cells.slice(i, i + 7));
    }

    this.computeRangeFlags();
  }

  private computeRangeFlags() {
    for (const week of this.grid) {
      for (const c of week) {
        if (!c.date || !c.inCurrentMonth) {
          c.isStart = c.isEnd = c.inRange = false;
          continue;
        }
        c.isStart = !!(this.checkIn && this.isSameDay(c.date, this.checkIn));
        c.isEnd = !!(this.checkOut && this.isSameDay(c.date, this.checkOut));
        c.inRange = false;

        if (this.checkIn && this.checkOut) {
          c.inRange = this.isWithin(c.date, this.atStart(this.addDays(this.checkIn, 1)), this.atStart(this.addDays(this.checkOut, -1)));
        }
      }
    }
  }

  private addDays(d: Date, n: number) {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  }

  // ===== Navegación de mes =====
  prevMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else {
      this.viewMonth--;
    }
    this.rebuildGrid();
  }
  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear++;
    } else {
      this.viewMonth++;
    }
    this.rebuildGrid();
  }
  get monthLabel(): string {
    return new Date(this.viewYear, this.viewMonth, 1).toLocaleString('en-US', {
      month: 'long', year: 'numeric',
    });
  }

  // ===== Selección =====
  selectDate(cell: DayCell) {
    if (!cell.date || !cell.inCurrentMonth || cell.disabled) return;
    const d = new Date(cell.date);

    if (!this.checkIn || (this.checkIn && this.checkOut)) {
      // empezar nuevo rango
      this.checkIn = d;
      this.checkOut = null;
    } else {
      // completar rango
      if (d >= this.checkIn && !this.isDisabled(d)) {
        this.checkOut = d;
      } else {
        // reiniciar si el clic es anterior o inválido
        this.checkIn = d;
        this.checkOut = null;
      }
    }
    this.computeRangeFlags();
  }

  // ===== Precio =====
  get nights(): number {
    if (!this.checkIn || !this.checkOut) return 0;
    const diff = this.atStart(this.checkOut).getTime() - this.atStart(this.checkIn).getTime();
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
  }
  get subtotal(): number { return this.nights * this.pricePerNight; }
  get total(): number {
    if (this.nights === 0) return 0;
    return this.subtotal + this.cleaningFee + this.serviceFee;
  }

  // Guests
  incAdults() { this.adults++; }
  decAdults() { this.adults = Math.max(1, this.adults - 1); }
  incChildren() { this.children++; }
  decChildren() { this.children = Math.max(0, this.children - 1); }

  // Acción
  reserve() {
    if (this.nights === 0) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    alert(
      `Reservation created:\n` +
      `• ${this.adults} adult(s), ${this.children} child(ren)\n` +
      `• ${this.nights} night(s)\n` +
      `• Total: $${this.total}`
    );
  }
}

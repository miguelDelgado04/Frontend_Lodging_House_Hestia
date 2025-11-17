import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View2OfCreatingALodging } from './view2-of-creating-alodging';

describe('View2OfCreatingALodging', () => {
  let component: View2OfCreatingALodging;
  let fixture: ComponentFixture<View2OfCreatingALodging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View2OfCreatingALodging]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View2OfCreatingALodging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

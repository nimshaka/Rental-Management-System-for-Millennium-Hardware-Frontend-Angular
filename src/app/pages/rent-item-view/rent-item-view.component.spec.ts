import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentItemViewComponent } from './rent-item-view.component';

describe('RentItemViewComponent', () => {
  let component: RentItemViewComponent;
  let fixture: ComponentFixture<RentItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentItemViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

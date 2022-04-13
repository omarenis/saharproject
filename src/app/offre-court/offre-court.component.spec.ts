import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCourtComponent } from './offre-court.component';

describe('OffreCourtComponent', () => {
  let component: OffreCourtComponent;
  let fixture: ComponentFixture<OffreCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

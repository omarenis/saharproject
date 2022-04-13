import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreLongComponent } from './offre-long.component';

describe('OffreLongComponent', () => {
  let component: OffreLongComponent;
  let fixture: ComponentFixture<OffreLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

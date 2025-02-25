import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPrimeComponent } from './video-prime.component';

describe('VideoPrimeComponent', () => {
  let component: VideoPrimeComponent;
  let fixture: ComponentFixture<VideoPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPrimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

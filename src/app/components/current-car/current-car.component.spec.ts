import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCarComponent } from './current-car.component';

describe('CurrentCarComponent', () => {
  let component: CurrentCarComponent;
  let fixture: ComponentFixture<CurrentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

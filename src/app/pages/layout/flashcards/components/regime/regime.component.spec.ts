import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimeComponent } from './regime.component';

describe('RegimeComponent', () => {
  let component: RegimeComponent;
  let fixture: ComponentFixture<RegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

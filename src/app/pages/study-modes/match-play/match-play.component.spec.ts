import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPlayComponent } from './match-play.component';

describe('MatchPlayComponent', () => {
  let component: MatchPlayComponent;
  let fixture: ComponentFixture<MatchPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchPlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardCardComponent } from './flashcard-card.component';

describe('FlashcardCardComponent', () => {
  let component: FlashcardCardComponent;
  let fixture: ComponentFixture<FlashcardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

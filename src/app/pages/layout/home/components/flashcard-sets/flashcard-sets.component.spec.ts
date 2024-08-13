import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSetsComponent } from './flashcard-sets.component';

describe('FlashcardSetsComponent', () => {
  let component: FlashcardSetsComponent;
  let fixture: ComponentFixture<FlashcardSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

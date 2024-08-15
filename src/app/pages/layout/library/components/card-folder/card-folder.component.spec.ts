import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFolderComponent } from './card-folder.component';

describe('CardFolderComponent', () => {
  let component: CardFolderComponent;
  let fixture: ComponentFixture<CardFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

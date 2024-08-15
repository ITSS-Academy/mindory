import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFolderComponent } from './information-folder.component';

describe('InformationFolderComponent', () => {
  let component: InformationFolderComponent;
  let fixture: ComponentFixture<InformationFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

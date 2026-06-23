import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerarbeitungComponent } from './verarbeitung.component';

describe('VerarbeitungComponent', () => {
  let component: VerarbeitungComponent;
  let fixture: ComponentFixture<VerarbeitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerarbeitungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerarbeitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

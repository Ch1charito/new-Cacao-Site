import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerkunftComponent } from './herkunft.component';

describe('HerkunftComponent', () => {
  let component: HerkunftComponent;
  let fixture: ComponentFixture<HerkunftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerkunftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerkunftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

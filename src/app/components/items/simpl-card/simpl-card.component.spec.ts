import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplCardComponent } from './simpl-card.component';

describe('SimplCardComponent', () => {
  let component: SimplCardComponent;
  let fixture: ComponentFixture<SimplCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

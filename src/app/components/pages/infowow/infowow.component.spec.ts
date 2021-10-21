import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfowowComponent } from './infowow.component';

describe('InfowowComponent', () => {
  let component: InfowowComponent;
  let fixture: ComponentFixture<InfowowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfowowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfowowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFounfComponent } from './pagenot-founf.component';

describe('PagenotFounfComponent', () => {
  let component: PagenotFounfComponent;
  let fixture: ComponentFixture<PagenotFounfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotFounfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotFounfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

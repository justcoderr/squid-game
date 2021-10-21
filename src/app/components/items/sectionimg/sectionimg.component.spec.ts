import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionimgComponent } from './sectionimg.component';

describe('SectionimgComponent', () => {
  let component: SectionimgComponent;
  let fixture: ComponentFixture<SectionimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

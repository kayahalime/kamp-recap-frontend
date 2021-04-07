import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBrandFilterComponent } from './color-brand-filter.component';

describe('ColorBrandFilterComponent', () => {
  let component: ColorBrandFilterComponent;
  let fixture: ComponentFixture<ColorBrandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorBrandFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBrandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

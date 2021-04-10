import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImagesAddComponent } from './car-images-add.component';

describe('CarImagesAddComponent', () => {
  let component: CarImagesAddComponent;
  let fixture: ComponentFixture<CarImagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImagesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

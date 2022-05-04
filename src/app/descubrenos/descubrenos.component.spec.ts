import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubrenosComponent } from './descubrenos.component';

describe('DescubrenosComponent', () => {
  let component: DescubrenosComponent;
  let fixture: ComponentFixture<DescubrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubrenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriramcharitmanasKandComponent } from './shriramcharitmanas-kand.component';

describe('ShriramcharitmanasKandComponent', () => {
  let component: ShriramcharitmanasKandComponent;
  let fixture: ComponentFixture<ShriramcharitmanasKandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriramcharitmanasKandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriramcharitmanasKandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

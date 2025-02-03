import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopanComponent } from './sopan.component';

describe('SopanComponent', () => {
  let component: SopanComponent;
  let fixture: ComponentFixture<SopanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

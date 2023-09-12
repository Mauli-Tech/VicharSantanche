import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OviComponent } from './ovi.component';

describe('OviComponent', () => {
  let component: OviComponent;
  let fixture: ComponentFixture<OviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

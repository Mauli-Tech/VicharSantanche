import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaupaiComponent } from './chaupai.component';

describe('ChaupaiComponent', () => {
  let component: ChaupaiComponent;
  let fixture: ComponentFixture<ChaupaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaupaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaupaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnyaneshwariAdhyayComponent } from './dnyaneshwari-adhyay.component';

describe('DnyaneshwariAdhyayComponent', () => {
  let component: DnyaneshwariAdhyayComponent;
  let fixture: ComponentFixture<DnyaneshwariAdhyayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnyaneshwariAdhyayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnyaneshwariAdhyayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

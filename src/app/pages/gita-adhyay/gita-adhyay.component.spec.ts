import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitaAdhyayComponent } from './gita-adhyay.component';

describe('GitaAdhyayComponent', () => {
  let component: GitaAdhyayComponent;
  let fixture: ComponentFixture<GitaAdhyayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitaAdhyayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitaAdhyayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

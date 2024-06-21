import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncomeComponent } from './view-income.component';

describe('ViewIncomeComponent', () => {
  let component: ViewIncomeComponent;
  let fixture: ComponentFixture<ViewIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIncomeComponent]
    });
    fixture = TestBed.createComponent(ViewIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

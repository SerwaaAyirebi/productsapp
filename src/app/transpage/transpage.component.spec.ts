import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspageComponent } from './transpage.component';

describe('TranspageComponent', () => {
  let component: TranspageComponent;
  let fixture: ComponentFixture<TranspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranspageComponent]
    });
    fixture = TestBed.createComponent(TranspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

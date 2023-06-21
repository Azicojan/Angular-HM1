import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoButtonComponent } from './my-info-button.component';

describe('MyInfoButtonComponent', () => {
  let component: MyInfoButtonComponent;
  let fixture: ComponentFixture<MyInfoButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInfoButtonComponent]
    });
    fixture = TestBed.createComponent(MyInfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

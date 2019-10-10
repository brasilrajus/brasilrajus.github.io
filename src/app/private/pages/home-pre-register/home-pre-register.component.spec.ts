import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePreRegisterComponent } from './home-pre-register.component';

describe('HomePreRegisterComponent', () => {
  let component: HomePreRegisterComponent;
  let fixture: ComponentFixture<HomePreRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePreRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

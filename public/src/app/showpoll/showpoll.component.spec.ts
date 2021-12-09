import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpollComponent } from './showpoll.component';

describe('ShowpollComponent', () => {
  let component: ShowpollComponent;
  let fixture: ComponentFixture<ShowpollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

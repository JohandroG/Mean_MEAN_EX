import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepollComponent } from './createpoll.component';

describe('CreatepollComponent', () => {
  let component: CreatepollComponent;
  let fixture: ComponentFixture<CreatepollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubredditComponent } from './my-subreddit.component';

describe('MySubredditComponent', () => {
  let component: MySubredditComponent;
  let fixture: ComponentFixture<MySubredditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubredditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

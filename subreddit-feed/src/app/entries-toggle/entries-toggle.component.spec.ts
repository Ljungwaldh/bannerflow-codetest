import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesToggleComponent } from './entries-toggle.component';

describe('EntriesToggleComponent', () => {
  let component: EntriesToggleComponent;
  let fixture: ComponentFixture<EntriesToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

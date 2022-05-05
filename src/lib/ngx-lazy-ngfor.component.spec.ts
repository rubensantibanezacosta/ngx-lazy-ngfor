import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLazyNgforComponent } from './ngx-lazy-ngfor.component';

describe('NgxLazyNgforComponent', () => {
  let component: NgxLazyNgforComponent;
  let fixture: ComponentFixture<NgxLazyNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLazyNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLazyNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

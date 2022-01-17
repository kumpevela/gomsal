import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancersContentComponent } from './dancers-content.component';

describe('DancersContentComponent', () => {
  let component: DancersContentComponent;
  let fixture: ComponentFixture<DancersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancersContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DancersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

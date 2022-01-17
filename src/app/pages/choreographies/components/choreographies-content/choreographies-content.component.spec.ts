import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreographiesContentComponent } from './choreographies-content.component';

describe('ChoreographiesContentComponent', () => {
  let component: ChoreographiesContentComponent;
  let fixture: ComponentFixture<ChoreographiesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoreographiesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreographiesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

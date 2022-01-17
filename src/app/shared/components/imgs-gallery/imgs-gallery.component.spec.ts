import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsGalleryComponent } from './imgs-gallery.component';

describe('ImgsGalleryComponent', () => {
  let component: ImgsGalleryComponent;
  let fixture: ComponentFixture<ImgsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

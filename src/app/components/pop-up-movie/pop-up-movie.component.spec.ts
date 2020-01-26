import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMovieComponent } from './pop-up-movie.component';

describe('PopUpMovieComponent', () => {
  let component: PopUpMovieComponent;
  let fixture: ComponentFixture<PopUpMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

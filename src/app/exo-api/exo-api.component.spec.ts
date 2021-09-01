import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoApiComponent } from './exo-api.component';

describe('ExoApiComponent', () => {
  let component: ExoApiComponent;
  let fixture: ComponentFixture<ExoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

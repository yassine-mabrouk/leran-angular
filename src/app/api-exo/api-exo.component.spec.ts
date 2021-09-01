import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExoComponent } from './api-exo.component';

describe('ApiExoComponent', () => {
  let component: ApiExoComponent;
  let fixture: ComponentFixture<ApiExoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

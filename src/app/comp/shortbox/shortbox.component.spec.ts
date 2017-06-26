/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShortboxComponent } from './shortbox.component';

describe('ShortboxComponent', () => {
  let component: ShortboxComponent;
  let fixture: ComponentFixture<ShortboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

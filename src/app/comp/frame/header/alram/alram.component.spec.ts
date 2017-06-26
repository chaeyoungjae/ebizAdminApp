/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlramComponent } from './alram.component';

describe('AlramComponent', () => {
  let component: AlramComponent;
  let fixture: ComponentFixture<AlramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

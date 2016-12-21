/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FabMenuScssComponent } from './fab-menu-scss.component';

describe('FabMenuScssComponent', () => {
  let component: FabMenuScssComponent;
  let fixture: ComponentFixture<FabMenuScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMenuScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMenuScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

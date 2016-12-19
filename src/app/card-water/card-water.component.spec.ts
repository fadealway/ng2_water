/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardWaterComponent } from './card-water.component';

describe('CardWaterComponent', () => {
  let component: CardWaterComponent;
  let fixture: ComponentFixture<CardWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

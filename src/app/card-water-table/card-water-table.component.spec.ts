/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardWaterTableComponent } from './card-water-table.component';

describe('CardWaterTableComponent', () => {
  let component: CardWaterTableComponent;
  let fixture: ComponentFixture<CardWaterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWaterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWaterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

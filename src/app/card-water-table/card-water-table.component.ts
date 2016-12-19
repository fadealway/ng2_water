import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-water-table',
  templateUrl: './card-water-table.component.html',
  styleUrls: ['./card-water-table.component.scss']
})
export class CardWaterTableComponent implements OnInit {

  constructor() { }
  
  @Input('daily') daily
  @Input('monthly') monthly
  @Input('total') total
  ngOnInit() {
  }

}

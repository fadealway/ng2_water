import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-water-header',
  templateUrl: './card-water-header.component.html',
  styleUrls: ['./card-water-header.component.scss']
})
export class CardWaterHeaderComponent implements OnInit {
  @Input() name
  constructor() { }

  ngOnInit() {
  }

}

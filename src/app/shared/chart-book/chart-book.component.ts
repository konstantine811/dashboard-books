import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-book',
  templateUrl: './chart-book.component.html',
  styleUrls: ['./chart-book.component.scss']
})
export class ChartBookComponent implements OnInit, OnChanges {
  @Input() labels: string[];
  @Input() data: number[];
  @Output() onChangedLabelData = new EventEmitter();
  status = 'months';
  constructor() {}

  LineChart = [];

  ngOnInit() {}

  ngOnChanges() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'The number of pages in the book',
            data: this.data
          }
        ],
        labels: this.labels
      },
      options: {}
    });
  }

  changeLabelData(label) {
    this.status = label;
    this.onChangedLabelData.emit(label);
  }
}

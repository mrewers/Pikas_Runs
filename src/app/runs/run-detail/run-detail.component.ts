import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Run } from '../../shared';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css']
})
export class RunDetailComponent {
  originalName: string;
  selectedRun: Run;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input()
  set run(value: Run) {
    if (value) {
      this.originalName = value.name;
    }
    this.selectedRun = Object.assign({}, value);
  }
}

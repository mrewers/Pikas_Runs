import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Run } from '../../shared';

@Component({
  selector: 'app-runs-list',
  templateUrl: './runs-list.component.html',
  styleUrls: ['./runs-list.component.css']
})
export class RunsListComponent {
  @Input() runs: Run[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

import { Component, OnInit } from '@angular/core';
import { Run, RunsService } from '../shared';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
  runs: Run[];
  currentRun: Run;

  constructor(private runsService: RunsService) {}

  ngOnInit() {
    this.getRuns();
    this.resetCurrentRun();
  }

  resetCurrentRun() {
    this.currentRun = { id: null, name: '', description: '' };
  }

  selectRun(run) {
    this.currentRun = run;
  }

  cancel(run) {
    this.resetCurrentRun();
  }

  getRuns() {
    this.runsService.all().subscribe(runs => (this.runs = runs));
  }

  saveRun(run) {
    if (!run.id) {
      this.createRun(run);
    } else {
      this.updateRun(run);
    }
  }

  createRun(run) {
    this.runsService.create(run).subscribe(response => {
      this.getRuns();
      this.resetCurrentRun();
    });
  }

  updateRun(run) {
    this.runsService.update(run).subscribe(response => {
      this.getRuns();
      this.resetCurrentRun();
    });
  }

  deleteRun(run) {
    this.runsService.delete(run).subscribe(response => {
      this.getRuns();
      this.resetCurrentRun();
    });
  }
}

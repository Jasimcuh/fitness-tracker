import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training.service';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any | undefined;

  constructor(private dialog: MatDialog, private trainingSevice: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer()
  }

  startOrResumeTimer() {
    const step = this.trainingSevice.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingSevice.completeExercise();
        clearInterval(this.timer);
      }
    }, step)
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data:
        { progress: this.progress }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingSevice.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    })
  }

}

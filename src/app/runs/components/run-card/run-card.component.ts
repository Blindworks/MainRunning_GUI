import {Component, Input} from '@angular/core';
import {Run} from '../../models/run.model';
import {DatePipe, formatCurrency, NgIf} from '@angular/common';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import {CourseProgressComponent} from '../course-progress/course-progress.component';

@Component({
  selector: 'app-run-card',
  standalone: true,
  imports: [
    DatePipe, HttpClientModule, AngularSvgIconModule, NgIf, CourseProgressComponent,
  ],
  templateUrl: './run-card.component.html',
  styleUrl: './run-card.component.scss'
})
export class RunCardComponent {
  @Input() run!: Run;
  protected readonly formatCurrency = formatCurrency;
}

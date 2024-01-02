import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {Run} from '../../models/run.model';

@Component({
  selector: 'app-course-progress',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './course-progress.component.html',
  styleUrl: './course-progress.component.scss'
})
export class CourseProgressComponent {

  @Input() run!: Run;
}

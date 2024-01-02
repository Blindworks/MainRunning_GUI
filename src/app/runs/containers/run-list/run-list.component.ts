import { Component } from '@angular/core';
import {RunCardComponent} from '../../components/run-card/run-card.component';
import {Run} from '../../models/run.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-run-list',
  standalone: true,
  imports: [
    RunCardComponent,
    NgForOf
  ],
  templateUrl: './run-list.component.html',
  styleUrl: './run-list.component.scss'
})
export class RunListComponent {

  runs: Run[] = [
    {
      'id': 1,
      'title': 'Lauf am Nachmittag',
      'startTime': new Date() ,
      'time': 31,
      'creator': 'Benedikt Lind',
      'avatar': 'benedikt_lind',
      'round': 10,
      'clockwise': true,
      'image': '10'
    },
    {
      'id': 2,
      'title': 'Lauf am Abend',
      'startTime': new Date() ,
      'time': 44,
      'creator': 'Benedikt Lind',
      'avatar': 'benedikt_lind',
      'round': 5,
      'clockwise': false,
      'image': '5'
    },
    {
      'id': 3,
      'title': 'Lauf am Abend',
      'startTime': new Date() ,
      'time': 37,
      'creator': 'Benedikt Lind',
      'avatar': 'benedikt_lind',
      'round': 2,
      'clockwise': true,
      'image': '2'
    },
    {
      'id': 4,
      'title': 'Lauf am Morgen',
      'startTime': new Date() ,
      'time': 84,
      'creator': 'Benedikt Lind',
      'avatar': 'benedikt_lind',
      'round': 21,
      'clockwise': false,
      'image': '21'
    },

  ];

}

import { Component } from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {RunService} from '../../service/run.service';

@Component({
  selector: 'app-run-upload',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgIf
  ],
  templateUrl: './run-upload.component.html',
  styleUrl: './run-upload.component.scss'
})
export class RunUploadComponent {

  status: "initial" | "selected" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;

  constructor(private runService: RunService) {
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "selected";
      this.file = file;
    }
  }

  onClickUploadFile(): void {
    //FIXME https://uploadcare.com/blog/how-to-upload-files-in-angular/
  }

}

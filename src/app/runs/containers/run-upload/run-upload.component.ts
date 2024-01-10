import { Component } from '@angular/core';
import {NgIf, NgStyle, NgSwitch, NgSwitchCase} from '@angular/common';
import {FileUploadService} from '../../service/file-upload.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-run-upload',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgIf,
    NgStyle
  ],
  templateUrl: './run-upload.component.html',
  styleUrl: './run-upload.component.scss'
})
export class RunUploadComponent {

  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private fileUploadService: FileUploadService) {
  }

  selectFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.progress = 0;
      this.message = '';
      this.currentFile = file;
    }
  }

  onClickUploadFile(): void {
    if (this.currentFile) {
      this.fileUploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
          }
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else if(err.message) {
            this.message = err.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
          this.progress = 0;
        },
        complete: () => {
          this.currentFile = undefined;
        }
      });
    }
  }

}

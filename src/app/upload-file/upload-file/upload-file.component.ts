import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../services/upload.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {

  file: any;
  list: Array<{ nome: string }> = [];

  constructor(
    private http: HttpClient,
    private uploadService: UploadService,
    private formBuilder: NonNullableFormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {}

  getFile(event: any) {
    this.file = event.target.files[0];
    this.list.push({ nome: this.file.name });
  }

  onUpload(file: any) {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);
      this.uploadService.enivarArquivos(formData).subscribe((res) => {
        this.list.splice(this.file, 1);
      });
    } else {
      console.error('deu erro');
    }
  }
}

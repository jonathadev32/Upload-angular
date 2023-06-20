import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  endpoint = 'fotos';
  api = environment.api;

  constructor(private http: HttpClient) {}

  enivarArquivos(data: FormData) {
    return this.http.post(`${this.api}${this.endpoint}`, data);
  }
  
}

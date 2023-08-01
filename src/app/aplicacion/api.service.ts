import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://test-services-4hi6.onrender.com/Analizar2/';

  constructor(private http: HttpClient) {}

  enviarDatos(imagen: File, diccionario: string): Observable<any> {
    const formData = new FormData();
    formData.append('image', imagen, imagen.name);
    formData.append('diccionario', diccionario);

    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    return this.http.post(this.apiURL, formData, { headers });
  }
}
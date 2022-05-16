import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl: string = "../../assets/Mocks/Cars.json" ;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(
      this.apiUrl , this.httpOptions
    );

  }





}

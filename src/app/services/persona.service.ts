import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  myAppUrl = 'http://localhost:8000';
  myAPIUrl = 'api/asesores';

  constructor(private http: HttpClient) {
    getListAsesores(){
      this.http.get(this.myAppUrl + this.myAPIUrl)
    }
   }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/Person';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = "https://localhost:7179/api/PortfolioAPI"
  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  postPerson(person: Person): Observable<Person> {
    console.log(person);
    return this.http.post<Person>(this.apiUrl, person,httpOptions);
  }
}

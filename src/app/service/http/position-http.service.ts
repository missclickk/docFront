import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionHttpService {
  private apiServerUrl = environment.apiUrl;
  protected uri = "position";
  
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiServerUrl}/${this.uri}/`);
  }

}

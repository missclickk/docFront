import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dto } from 'src/app/model/interface/Dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService<T extends Dto> {
  private apiServerUrl = environment.apiUrl;
  protected uri = "";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.apiServerUrl}/${this.uri}/`);
  
  }

  public getPage(page : number): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.apiServerUrl}/${this.uri}?page=${page}`)
  }

  public create(object: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiServerUrl}/${this.uri}`,  object);
  }

  public update(object: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiServerUrl}/${this.uri}/${object.id}`, object);
  }

  public delete(id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiServerUrl}/${this.uri}/${id}`);
  }

  

}

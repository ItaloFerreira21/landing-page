import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewslatterService {
  private endpointUrl =
    'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}
  sendData(nome: string, email: string): Observable<NewslatterResponse> {
    const data = {nome, email}
    return this.http.post<NewslatterResponse>(this.endpointUrl, data);
  };
}

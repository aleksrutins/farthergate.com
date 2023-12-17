import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type LangleyResponse = {
  language: string,
  color: string,
  amount: number
}[]

@Injectable({
  providedIn: 'root'
})
export class LangleyService {

  constructor(private http: HttpClient) { }

  getApiUrl = (repo: string) => "https://langley.farthergate.com/" + repo

  fetchLanguages = (repo: string) =>
    this.http.get<LangleyResponse>(this.getApiUrl(repo))
}

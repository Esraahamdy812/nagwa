import { Word } from './interfaces/word';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  constructor(private _http:HttpClient) { }
  getWordList():Observable<Word[]>{
   return this._http.get<Word[]>(`http://localhost:3000/wordList`);
  }
}

import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Run } from './run.model';

import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/runs/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class RunsService {
  constructor(private http: Http) {}

  all() {
    return this.http.get(BASE_URL).pipe(map(res => res.json()));
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`).pipe(map(res => res.json()));
  }

  create(run: Run) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(run), HEADER).pipe(map(res => res.json()));
  }

  update(run: Run) {
    return this.http.patch(`${BASE_URL}${run.id}`, JSON.stringify(run), HEADER).pipe(map(res => res.json()));
  }

  delete(run: Run) {
    return this.http.delete(`${BASE_URL}${run.id}`).pipe(map(res => res.json()));
  }

  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);

    return this.http.get(`${BASE_URL}`, { search }).pipe(map(res => res.json()));
  }
}

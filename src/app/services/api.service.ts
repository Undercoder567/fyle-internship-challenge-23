import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) : Observable<any>{
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getRepos(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`);
  }
   // Get paginated repositories
   getPaginatedRepos(githubUsername: string, pageSize: number, page: number): Observable<any> {
    const perPage = pageSize > 100 ? 100 : pageSize; // Limit page size to maximum 100
    const url = `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${perPage}`;
    return this.httpClient.get(url);
    return this.httpClient.get(url).pipe(shareReplay());
  } 
}

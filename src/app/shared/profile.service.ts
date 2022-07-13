import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly baseURL = 'http://localhost:3000/api/profile';

  constructor(private http: HttpClient) { }

  postinfo(emp: Profile) {
    return this.http.post(this.baseURL, emp);
  }

  getinfolist() {
    return this.http.get(this.baseURL);
  }

  putinfo(emp: Profile) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteinfo(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

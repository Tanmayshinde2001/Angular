import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User={
    name:"",
    email:"",
    password:"",

}

  constructor(private http:HttpClient)
   
  {
    
   }
   postUser(user:User){
     return this.http.post('http://localhost:3000/api'+'/register',user)
   }
}

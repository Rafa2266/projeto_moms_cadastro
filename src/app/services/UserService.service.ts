import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
  export class UserService{
    private readonly API= `${environment.API}/`;
    constructor(protected http: HttpClient) {}

    userList(){
        return this.http
        .get(`${this.API}list_users`)
        .pipe();
      }

      userCreate(user:User){
        return this.http
        .post(`${this.API}create_user`,user)
        .pipe();
      }
  }
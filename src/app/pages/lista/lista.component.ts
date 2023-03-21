import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/UserService.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  users=new Array<User>();

    
    constructor(
      private userService: UserService
      ){}

      ngOnInit(): void {
        this.loadUsers();
      }

      loadUsers(){
        this.userService.userList().subscribe(
          (response) => {
            Object.assign(this.users, response);
          },
          (error) => {
            console.log(error);
          }
        );
      }






}

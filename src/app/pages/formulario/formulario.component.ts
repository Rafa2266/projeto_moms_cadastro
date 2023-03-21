import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/UserService.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

    constructor( 
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router
    ){}

      formCadastro:FormGroup;
    ngOnInit(): void {
      this.setFormToLogin();
    }

    setFormToLogin(){
        this.formCadastro = this.formBuilder.group({
          nome: new FormControl(null, Validators.required),
          cpf: new FormControl(null, [Validators.required ,Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]),
          date: new FormControl(null, Validators.required),
        });
      
    }
    submitCadastro(){

      if(this.formCadastro.valid){

        let user=new User();
        user.CPF=this.formCadastro.value.cpf
        user.Nome=this.formCadastro.value.nome
        user.Data_nascimento=this.formCadastro.value.date
        this.createUser(user);

      }

    }

    createUser(user:User){
      this.userService.userCreate(user).subscribe((res:any)=>{
       Swal.fire(
         "Success",
         "Usuário " + res.Nome + " criado com sucesso",
         "success"
       );
      this.router.navigate(['/lista_cadastrados'])
       
      },err=>{
       Swal.fire(
         "Error",
         "Alguma coisa deu errado salvando o usuário",
         "error"
       );
      })
 }

}

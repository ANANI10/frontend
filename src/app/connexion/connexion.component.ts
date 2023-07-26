import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  loginForm !: FormGroup;
  isSubmitted !: false;

  constructor(private authservice : AuthService , private router:Router , private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['' , Validators.required]
    });
  }
  get formControls(){
    return this.loginForm.controls;
  }

  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = false;
    if (this.loginForm.valid){
      return ;
    }
    this.authservice.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/administrateur')
  }

}

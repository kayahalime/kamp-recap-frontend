import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocaleStorageService } from 'src/app/services/locale-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService,private router: Router, private localeStorageService:LocaleStorageService,) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }
  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.localeStorageService.set("token", response.data.token)
        this.toastrService.success("giriş yapıldı")
        console.log("oldu")
        this.router.navigate(["cars"])
      }, responseError=>{
        this.toastrService.error("e-posta veya parola hatalı", "Hata")
      })
    }
  }
 
}


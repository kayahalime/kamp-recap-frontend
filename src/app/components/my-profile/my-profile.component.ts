import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profileForm:FormGroup
  email:string;
  password:FormControl
  user:User = new User();
  status:string


  constructor(private userService:UserService,
              private formBuilder:FormBuilder,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.createProfileAddForm();
    this.email = localStorage.getItem('email')
    
  }

  createProfileAddForm(){
    this.profileForm=this.formBuilder.group({
      id:this.user.id,
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      status:true
    })
  }

 

  updateProfile(){
    if(this.profileForm.valid){
      let profileModel = Object.assign({},this.profileForm.value)
      this.userService.profileUpdate(profileModel).subscribe(response=>{
        this.toastrService.success(response.message);
      },responseError=>{
       this.toastrService.error(responseError.error);
      });
    }else{
      this.toastrService.error("Formu Boş Bıraktınız")
    }
  }

}

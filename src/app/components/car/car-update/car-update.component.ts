import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
 
  carId:number;
 
  car:Car;
  constructor( private carService:CarService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"];
        this.getCar(params["carId"]);
      
      }
    })

    this.createCarUpdateForm();
   
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
     
      carId:[Number(this.carId),Validators.required],
      carName:["",Validators.required]
      
    });
  }

  update(){
  
    if(this.carUpdateForm.valid){
     

      let carModel=Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(data=>{
       
        this.toastrService.success("Güncelleme Tamamlandı","Başarılı")
      },dataError=>{
        this.toastrService.error("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }


  getCar(carId:number){
   
    this.carService.getById(carId).subscribe(response=>{
     this.car=response.data
    })
  }

}

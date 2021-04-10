import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-images-add',
  templateUrl: './car-images-add.component.html',
  styleUrls: ['./car-images-add.component.css']
})
export class CarImagesAddComponent implements OnInit {

  apiUrl = "https://localhost:44306/"
  carImages:CarImage[]=[];
  addImageForm:FormGroup;
  currentCarId:number;
  currentFile:File | null = null;

  constructor(
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
  ) { }

  ngOnInit(): void {
    this.createAddImageForm();
    this.activatedRoute.params.subscribe(params=>{
      this.getCarImages(params["carId"]);
      this.currentCarId = params["carId"];
    })
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.currentFile = event.target.files[0];
    }
  }

  addImage(carId:number){
    if(this.currentFile){
      const formData = new FormData();
      formData.append('CarId', carId.toString())
      formData.append('Image', this.currentFile)
      this.carImageService.add(formData).subscribe( response => {
        this.toastrService.success("image added.")
        this.getCarImages(carId)
        this.addImageForm.reset()
      }, responseError => {
        if(responseError.error.Errors.length>0){
          for(let i = 0; i < responseError.error.Errors.length; i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Error")
          }
        }
      })
    }
  }

  deleteImage(carImage:CarImage){
    this.carImageService.delete(carImage).subscribe(response=>{
      this.toastrService.info("image deleted")
      this.getCarImages(carImage.carId)
    });
  }
  
  getCarImages(id:number){
    this.carImageService.getCarImages(id).subscribe(response=>{
      this.carImages = response.data;
    });  
  }

  createAddImageForm(){
    this.addImageForm = this.formBuilder.group({
      Image: ["", Validators.required],
    });
  }
 

}

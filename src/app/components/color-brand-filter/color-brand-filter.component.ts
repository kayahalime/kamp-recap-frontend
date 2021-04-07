import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-brand-filter',
  templateUrl: './color-brand-filter.component.html',
  styleUrls: ['./color-brand-filter.component.css']
})
export class ColorBrandFilterComponent implements OnInit {

  currentColor:number;
  currentBrand:number;
  getByFilterCars:Car[];
  brands:Brand[];
  colors:Color[];
  constructor(private brandService:BrandService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {
     this.getBrands();
    this.getColors();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  getByFilter(brandId:number,colorId:number){
    
    
    this.router.navigate(["cars/colorBrandFilter/"+brandId+"/"+colorId]);

  }

}

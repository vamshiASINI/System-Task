import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sampleData  from '../file/sampleData.json'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
a:any;


  constructor(private rtr:Router) {
    for(this.a=0;this.a>36;this.a++){
      this.file.push(this.a);
       break;
    }
   }
  
 

  public file:{ Price:Number,ProductTitle:string}[] = sampleData;
  sampleData=sampleData.sort((low,high)=>high.Price-low.Price)
  sort(event:any){
    console.log(event.target.value,'kk')
    this.rtr.navigate(['/list'],{
      queryParams:{'sortType':event.target.value}
    })
    switch (event.target.value) {
      case "lowtohigh":
        {
         this.sampleData = sampleData.sort((low, high) => low.Price - high.Price);
          break;
        }

      case "hightolow":
        {
          this.sampleData = sampleData.sort((low, high) => high.Price - low.Price);
          break;
        }
        default: {
          this.sampleData=sampleData.sort((low,high)=>high.Price-low.Price)
          break;
        }
      }
      return this.sampleData;

  }
  ngOnInit(): void {
    
   
  }
 

}


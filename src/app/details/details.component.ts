import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private drinkId!:string;
  public drinkDetail:any;
  percent!:number;
  vote!:number;
  constructor(private api:ApiService, private activatedRoute: ActivatedRoute, private utility:UtilityService) {
    this.activatedRoute.params.subscribe(val=>{
      console.log(val['id']);
      this.drinkId = val['id'];

    })
   }

  ngOnInit(): void {
    this.percent = this.utility.randomInteger(30,100);
    this.vote = this.utility.randomInteger(0,500);
    this.api.getDrinksById(this.drinkId)
    .subscribe({
      next:(res:any)=>{
        console.log(res);
        this.drinkDetail = res.drinks[0];
        this.drinkDetail.ingredentsList = []
        for ( var property in this.drinkDetail ) {

          if(property.includes("strIngredient"))
          this.drinkDetail.ingredentsList.push(this.drinkDetail[property])
        }
      }
    })
  }

}

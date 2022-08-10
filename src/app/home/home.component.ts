import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  drinks: any = [];
  ingredents: any = [];
  constructor(private api: ApiService,
    private router: Router,
    private utlity: UtilityService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getDrinks()
      .subscribe({
        next: (res) => {
          this.drinks = res.drinks;
          console.log(res);
          this.drinks.forEach((a: any) => {
            a.price = this.utlity.randomInteger(100, 1500);
            a.quantity = 1;
          })
        }
      })
  }
  showDrink(id: string) {
    this.router.navigate(['detail', id])
  }
  addItem(item:any){
    this.cartService.addtoCart(item);
  }

}

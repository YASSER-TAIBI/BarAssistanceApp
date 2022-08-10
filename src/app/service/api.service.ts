import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get<any>("https://www.thecocktaildb.com/api/json/v2/9973533/recent.php")
  }
  getDrinksById(id:string){
    return this.http.get<any>("https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i="+id)
  }
}

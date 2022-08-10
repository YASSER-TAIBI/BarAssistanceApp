import { ApiService } from './service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BarAssitanceUI';
  drinks:any = [];
  ingredents:any = [];
  constructor(private api: ApiService){

  }
  ngOnInit(): void {

  }

}

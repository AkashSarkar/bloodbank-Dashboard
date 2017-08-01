import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users:any;
  data:any;
  subscription: Subscription;
  constructor(private service:DataServiceService) { 
    
  }
 delete(name,gender){
  this.data=[
    name,
    gender
  ];
  console.log(name);
  console.log(gender);
  this.service.delete(this.data).subscribe(data=>{
    console.log(data);
  });

 }
  ngOnInit() {
    this.subscription = this.service.showUser().subscribe(data=>{
      this.users=data;
    });
  }
  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    this.subscription.unsubscribe();
  }

}

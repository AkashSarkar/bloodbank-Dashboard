import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users:any;
  data:any;
  constructor(private service:DataServiceService) { 
    this.service.showUser().subscribe(data=>{
      this.users=data;
    });
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
  }

}

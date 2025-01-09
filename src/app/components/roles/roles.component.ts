import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole, APIResponseModel } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient); //new way to create instance of Http client
  
  
  
  // constructor(private http: HttpClient){

  // }

  ngOnInit(): void {
    // create instance of Http client
    //as this fuction always executes when the page is load so we call the fuction having API call

    this.getAllRoles();
  }
  
  getAllRoles(){
    //create API call and get the data
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel)=>{
        this.roleList = res.data;
    })
  }


















// firstName: String = "Angular Tutorial";
// angularVersion = 18;
// version: number = 18;
// isActive: boolean = true;
// currentDate: Date = new Date();
// inputType: string = "button";
// selectedState: string = "";
// showWelcomeAlert(){
// alert("Welcome Angular 18 Tutorial")
// }
// showMessage(message: string){
//   alert(message)
// }



}

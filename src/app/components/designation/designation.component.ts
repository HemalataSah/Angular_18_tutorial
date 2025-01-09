import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IRole } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

designationList: IRole[]=[];
isLoader: boolean = false; //for loading
masterService = inject(MasterService); //caall master service

ngOnInit(){
 this.masterService.getDesignations().subscribe((res:APIResponseModel)=>{
      this.designationList= res.data;
      this.isLoader=true;
 },error=>{
  alert("API error/ Network Down")
 })
}
}

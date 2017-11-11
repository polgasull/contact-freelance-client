import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FreelanceApiService } from '../../../services/freelance-api.service'
import { SessionService } from '../../../services/session.service'
import { HelpersService } from '../../../services/helpers.service'


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  serviceId: any;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceDetails: any = {};
  sectionsList: any = [];
  newSection: any = {};
  ob:any = '100000';
  

//JORDI AQUÍ
  

  constructor(
    private freelanceApi: FreelanceApiService, 
    private session: SessionService, 
    private helpers: HelpersService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.serviceId = params['id'];
      });
    this.serviceDetailsRender()
 
    this.sectionList();

  }

  serviceDetailsRender(){
    this.freelanceApi.serviceDetails(this.serviceId)
      .subscribe((details) => {
        this.serviceDetails = details;
      });

  }
  sectionList(){
    this.freelanceApi.sectionsList(this.serviceId)
      .subscribe((details) => {
        this.sectionsList = details;
        
      });
  }
  
  removeSection(sectionId){
    this.freelanceApi.removeSection(sectionId)
    .subscribe((details)=>{
      this.sectionList();
      this.newSection = {};  
    });
  }

  removeService(id) {
    this.freelanceApi.removeService(id)
      .subscribe((details) => {
        this.serviceDetailsRender();
        this.router.navigate(['/dashboard/services/'])
      });
  }
  
}

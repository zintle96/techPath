import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  
  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};

  constructor(
    public http: HttpService,
    public actRoute: ActivatedRoute,
    public router: Router,
    
  ) {}

  ngOnInit() {
    this.http.GetUser(this.id).subscribe((res: {}) => {
      this.userObj = res;
      console.log(this.userObj)
    })
  }

  
  

}
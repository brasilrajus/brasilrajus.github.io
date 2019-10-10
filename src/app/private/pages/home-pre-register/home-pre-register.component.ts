import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-home-pre-register',
  templateUrl: './home-pre-register.component.html',
  styleUrls: ['./home-pre-register.component.css']
})
export class HomePreRegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }
  
  logout() {
    this.authService.SignOut();
  }

}

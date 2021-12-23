import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://e7.pngegg.com/pngimages/853/876/png-clipart-payroll-salary-computer-icons-paycheck-payroll-manager-service-payment.png';

  constructor() { }

  ngOnInit(): void {
  }

}

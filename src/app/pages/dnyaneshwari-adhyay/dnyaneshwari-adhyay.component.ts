import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dnyaneshwari-adhyay',
  templateUrl: './dnyaneshwari-adhyay.component.html',
  styleUrls: ['./dnyaneshwari-adhyay.component.scss']
})
export class DnyaneshwariAdhyayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAdhyayPage(adhyay_no: number){
    this.router.navigate([`dnyaneshwari/adhyay/${adhyay_no}`])
  }

}

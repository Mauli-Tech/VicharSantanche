import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-gita-adhyay',
  templateUrl: './gita-adhyay.component.html',
  styleUrls: ['./gita-adhyay.component.scss']
})
export class GitaAdhyayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAdhyayPage(adhyay_no: number){
    this.router.navigate([`gita/adhyay/${adhyay_no}`])
  }
}

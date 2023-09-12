import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-shlok',
  templateUrl: './shlok.component.html',
  styleUrls: ['./shlok.component.scss'],
})
export class ShlokComponent implements OnInit {
  public adhyay_no: number = 0;
  public data: any;
  public adhyay_name: any;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private dataService: DataService
  ) {
    this.route.params.subscribe(
      (params) => (this.adhyay_no = params['adhyay_no'])
    );
    this.adhyay_name = this.dataService.adhyayName[this.adhyay_no];
    console.log(this.adhyay_name);
  }

  ngOnInit(): void {
    this.getData(this.adhyay_no);
  }

  getData(adhyay_no: number) {
    return this.databaseService
      .getAdhyay(adhyay_no)
      .then((result) => {
        this.data = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

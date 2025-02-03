import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-chaupai',
  templateUrl: './chaupai.component.html',
  styleUrls: ['./chaupai.component.scss']
})
export class ChaupaiComponent implements OnInit {

  public kand_no: number = 0;
  public sopan_no: any
  public data: any;
  public kand_name: any;
  public sopan_name: any

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private dataService: DataService,
    private router: Router
  ) {
    this.route.params.subscribe(
      (params) => {
        this.kand_no = params['kand_no']
        this.sopan_no = params['sopan_no']
      }
    );
    this.kand_name = this.dataService.kandName[this.kand_no];
  }

  ngOnInit(): void {
    this.getData(this.sopan_no);
    this.getSopanData(this.sopan_no)
  }

  getData(sopan_no: number) {
    return this.databaseService
      .getChaupai(this.kand_no, sopan_no)
      .then((result) => {
        this.data = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getSopanData(sopan_no: number) {
    return this.databaseService
      .getSopanDetails(this.kand_no, sopan_no)
      .then((result: any) => {
        this.sopan_name = result[0]['sopan_name'];
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

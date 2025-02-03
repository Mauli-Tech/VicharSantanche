import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-sopan',
  templateUrl: './sopan.component.html',
  styleUrls: ['./sopan.component.scss']
})
export class SopanComponent implements OnInit {

  public kand_no: number = 0;
  public data: any;
  public kand_name: any;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private dataService: DataService,
    private router: Router
  ) {
    this.route.params.subscribe(
      (params) => (this.kand_no = params['kand_no'])
    );
    this.kand_name = this.dataService.kandName[this.kand_no];
  }

  ngOnInit(): void {
    this.getData(this.kand_no);
  }

  getData(kand_no: number) {
    return this.databaseService
      .getSopan(kand_no)
      .then((result) => {
        this.data = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  openChaupaiPage(sopan_no: any) {
    this.router.navigate([`shriramcharitmanas/kand/${this.kand_no}/${sopan_no}`])
  }

}

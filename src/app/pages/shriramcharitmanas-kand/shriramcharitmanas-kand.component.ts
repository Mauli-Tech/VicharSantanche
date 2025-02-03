import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shriramcharitmanas-kand',
  templateUrl: './shriramcharitmanas-kand.component.html',
  styleUrls: ['./shriramcharitmanas-kand.component.scss']
})
export class ShriramcharitmanasKandComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSopanPage(kand_no: number){
    this.router.navigate([`shriramcharitmanas/kand/${kand_no}`])
  }

}

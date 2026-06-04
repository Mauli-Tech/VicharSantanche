import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-ovi',
  templateUrl: './ovi.component.html',
  styleUrls: ['./ovi.component.scss']
})
export class OviComponent implements OnInit {

  public adhyay_no: number = 0;
  public data: any[] = [];
  public adhyay_name: any;

  // Pagination
  public currentPage: number = 1;
  public itemsPerPage: number = 500;
  public totalItems: number = 0;
  public isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private dataService: DataService
  ) {
    this.route.params.subscribe(
      (params) => (this.adhyay_no = params['adhyay_no'])
    );
    this.adhyay_name = this.dataService.adhyayName[this.adhyay_no];
  }

  ngOnInit(): void {
    this.getData();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  async getData(): Promise<void> {
    this.isLoading = true;
    const result = await this.databaseService.getOvi(this.adhyay_no, this.currentPage, this.itemsPerPage);

    if (result && !('error' in result)) {
      this.data = result.data;
      this.totalItems = result.count;
    } else {
      console.error(result);
      this.data = [];
    }
    this.isLoading = false;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.getData();
    }
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }
}
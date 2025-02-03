import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ]),
    ]),
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)' }),
        animate('0.3s ease-out', style({ transform: 'scale(1)' }))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  books = [
    { title: 'Bhagavad Gita (गीता)', cover: 'assets/wallpaper.png', description: 'A Hindu scripture that is part of the Mahabharata.', url: 'gita'},
    { title: 'Dnyaneshwari (ज्ञानेश्वरी)', cover: 'assets/adhyay18.jpg', description: 'A commentary on the Bhagavad Gita by Sant Dnyaneshwar.', url: 'dnyaneshwari' },
    { title: 'Ramcharitmanas (श्रीरामचरितमानस)', cover: 'assets/Ramcharitmanas.jpg', description: 'An epic poem by Tulsidas retelling the Ramayana.', url: 'shriramcharitmanas' }
  ];
  selectedBook: any = null;

  openBook(book: any) {
    this.selectedBook = book;
  }

  closeBook() {
    this.selectedBook = null;
  }

  redirectBook(url: any){
    this.router.navigate([url])
  }

}

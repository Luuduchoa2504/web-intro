import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  slideConfig= {
    slideToScroll: 1,
    slidesToShow: 3,
    // dots: true,
    infinite: true,
  }

  slides = [
    'src/assets/images/home-page/banner_home.png',
    'src/assets/images/home-page/banner_home.png',
    'src/assets/images/home-page/banner_home.png',
  ]

  constructor() {
  }
  ngOnInit() {
  }
}

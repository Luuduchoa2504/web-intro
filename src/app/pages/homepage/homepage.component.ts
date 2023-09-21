import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  slideConfig= {
    slideToScroll: 1,
    slidesToShow: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000, 
  }

  slides = [
    '../../../assets/images/home-page/banner_home.png',
    '../../../assets/images/home-page/banner_home.png',
    '../../../assets/images/home-page/banner_home.png',
  ]

  constructor() {
  }
  ngOnInit() {
  }
}

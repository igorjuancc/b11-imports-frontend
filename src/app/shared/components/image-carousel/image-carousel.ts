import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: false,
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css',
})
export class ImageCarousel {
  images = [
    'https://wallpapers.com/images/hd/football-cleats-corner-arc-6xyoye4hw1zj1cav.webp',
    'https://wallpapers.com/images/high/cloudy-sky-and-goalpost-football-pc-g8r721uw3u0jwq3d.webp',
    'https://wallpapers.com/images/high/football-pc-wzpsrv3xt522iiu5.webp'
  ];
}

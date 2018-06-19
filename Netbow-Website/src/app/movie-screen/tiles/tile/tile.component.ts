import { Component, OnInit,  Input} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'ox-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  animations: [
    trigger('divState', [
      state('close', style({
      })),
      state('open', style({
        'height': '100%',
        transform: 'translate(0, 0)'
      })),
      transition('* <=> *', animate('100ms ease-in-out')),
    ]),
    trigger('descriptionState', [
      state('hide', style({
        display: 'none',
        opacity: '0',
      })),
      state('visible', style({
        display: 'block',
        opacity: '1'
      })),
      transition('hide <=> visible', animate('60ms ease-in-out')),
    ]),
    trigger('titleState', [
      state('show', style({
        opacity: '1'
      })),
      state('opacity', style({
        opacity: '0.6'
      })),
      transition('show <=> opacity', animate('100ms ease-in-out')),
    ]),
    trigger('starsState', [
      state('hide', style({
        display: 'none',
        opacity: '0',
      })),
      state('show', style({
        display: 'block',
        opacity: '.6'
      })),
      transition('hide <=> show', animate('90ms ease-in-out')),
    ]),
    trigger('categoryState', [
      state('show', style({
        display: 'block',
        opacity: '1',
      })),
      state('hide', style({
        display: 'none',
        opacity: '0'
      })),
      transition('hide <=> show', animate('90ms ease-in-out')),
    ]),

  ]
})
export class TileComponent implements OnInit {
  @Input() imgPath: string;
  @Input() titleInput: string;
  @Input() starsInput: number;
  @Input() categoryInput: string;
  @Input() descriptionInput: string;

  state = 'close';
  description = 'hide';
  title = 'show';
  stars = 'hide';
  category = 'show';

  constructor() { }

  ngOnInit() {
    // TODO: NOT DATA SECURIT
    this.imgPath = 'https://image.tmdb.org/t/p/w500' + this.imgPath;
  }

  OpenInfoBox() {
    if (this.state === 'close') {
      this.state = 'open';
      this.description = 'visible';
      this.title = 'opacity';
      this.stars = 'show';
      this.category = 'hide';
    } else {
      this.state = 'close';
      this.description = 'hide';
      this.title = 'show';
      this.stars = 'hide';
      this.category = 'show';
    }
  }
  // TODO: IMPLENTATION CHECKED STARS
  // TODO: FIX IT DISPLAY CATEGORY
  // TODO: FIX IT BLACK POLE IN TILE TITLE
  // TODO: DESCRIPTION
}
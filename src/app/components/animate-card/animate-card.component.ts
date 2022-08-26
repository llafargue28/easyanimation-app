import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-card',
  templateUrl: './animate-card.component.html',
  styleUrls: ['./animate-card.component.scss'],
})
export class AnimateCardComponent implements OnInit {

  @Input() hasHeader : boolean ;
  @Input() hasFooter : boolean ;
  @Input() status : string;
  @Input() updatedAt : String;
  @Input() createdAt : string;
  @Input() notes : string;
  @Input() value : string;

  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';

interface CardData {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'pablodotjs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CardData;

  constructor() { }

  ngOnInit(): void {
  }

}

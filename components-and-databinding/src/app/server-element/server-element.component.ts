import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Element } from '../shared/element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('element') element: Element = new Element("", "", "");

  constructor() { }

  ngOnInit(): void {
  }

}

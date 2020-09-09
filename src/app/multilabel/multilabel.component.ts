import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multilabel',
  templateUrl: './multilabel.component.html',
  styleUrls: ['./multilabel.component.css']
})
export class MultiLabelComponent implements OnInit {

  @Input() itemName: string;

  constructor() { }

  ngOnInit(): void {
  }

}

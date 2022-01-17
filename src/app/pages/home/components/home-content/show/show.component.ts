import { HomeComponent } from './../../../models/home';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
@Input() public show!: HomeComponent
  constructor() { }

  ngOnInit(): void {
  }

}

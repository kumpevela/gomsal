import { HomeComponent } from './../../../models/home';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnc',
  templateUrl: './dnc.component.html',
  styleUrls: ['./dnc.component.scss']
})
export class DncComponent implements OnInit {
@Input() public dnc!: HomeComponent
  constructor() { }

  ngOnInit(): void {
  }

}

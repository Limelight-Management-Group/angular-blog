import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  public x : number = 6;
  constructor() { }

  ngOnInit() {
  }

}

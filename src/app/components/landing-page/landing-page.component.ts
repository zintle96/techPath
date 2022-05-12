import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private viewportScroller : ViewportScroller) { }
  public onClick(elementId : string) : void { this.viewportScroller.scrollToAnchor(elementId);}

  ngOnInit(): void {
  }

}

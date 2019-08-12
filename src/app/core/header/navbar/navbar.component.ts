import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavPipe } from '../../../shared/pipes/nav.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  navigations: string [];

  private navPipe: NavPipe;

  constructor(private route: Router) { }

  ngOnInit() {
    this.navPipe = new NavPipe();
  }

}

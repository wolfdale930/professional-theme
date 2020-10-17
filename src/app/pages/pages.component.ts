import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  isCollapsed = true;


  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }



}

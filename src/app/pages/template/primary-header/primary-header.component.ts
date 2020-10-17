import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.less']
})
export class PrimaryHeaderComponent implements OnInit {

  viewProfile = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.viewProfile = false;
    this.router.navigate(['/auth/login']);
  }

}

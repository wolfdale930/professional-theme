import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.less']
})
export class SecondaryHeaderComponent implements OnInit {

  breadcrups = [];

  constructor(
    private router: Router
  ) {
    router.events.pipe(debounceTime(50)).subscribe(
      (res: any) => {
        if (res && res.url) {
          this.breadcrups = this.getRoutingArray(res.url);
        }
      }
    );
  }

  ngOnInit(): void {
    let str = this.router.url;
    this.breadcrups = this.getRoutingArray(str);
  }

  getRoutingArray(url: string) {
    switch (url) {
      case '/': return ['Dashboard'];
      case '/dashboard': return ['Dashboard'];
      case '/user-management/users': return ['User Management', 'Users']
      case '/user-management/roles': return ['User Management', 'Roles']
      case '/settings': return ['Settings']
      default: return []
    }
  }

}

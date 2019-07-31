import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'rs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHome = true;
  pageTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data.title) {
          return child.snapshot.data.title;
        }
      })
    ).subscribe((title: string) => {
      if (title === 'Home') {
        this.isHome = true;
        this.pageTitle = 'Rio Suave Vineyard';
      } else {
        this.isHome = false;
        this.pageTitle = title;
      }
    });
  }
}

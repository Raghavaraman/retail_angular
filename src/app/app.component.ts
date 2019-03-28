import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  selected() {
    this.router.navigate(['/product']);
  }

  removeFunc() {
    $('.screen_video').remove();
  }
}

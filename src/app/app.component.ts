import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-algo';
  clickLink (link: string) {
    console.log(link, 'Clicked')
  }
}

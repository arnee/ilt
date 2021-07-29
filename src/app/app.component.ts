import { Component } from '@angular/core';

/* Kaiser X Labs Imports */
import { log } from '@kxl/power-log';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-ndbx-template';

  constructor() {
    log.greet.kxl({
      title: 'Kaiser X Angular NDBX Template',
      version: '1.0.0',
      url: 'https://kaiser-x.com'
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Dynamic Widgets</h1> Hello World Template!'
})
export class AppComponent {
  title = 'ds-cloud-widget';



  test(){
    alert("TEST ALERT");
  }
}

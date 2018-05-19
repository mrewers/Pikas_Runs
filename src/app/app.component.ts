import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mighty Pika';
  links = [{ path: '/', icon: 'home', label: 'Home' }];
}

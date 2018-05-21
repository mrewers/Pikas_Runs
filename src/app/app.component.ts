import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mighty Pika';
  links = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/profile', icon: 'account_circle', label: 'Profile' },
    { path: '/calendar', icon: 'calendar_today', label: 'Calendar' },
    { path: '/about', icon: 'help', label: 'About' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
    ],
})
export class AppComponent {
  title = 'campaign-builder-app';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});

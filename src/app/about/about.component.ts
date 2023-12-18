import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) { }

  goToBob() {
    this.router.navigate(['/about/bob']);
  }

  goToSusan() {
    this.router.navigate(['/about/susan']);
  }
}

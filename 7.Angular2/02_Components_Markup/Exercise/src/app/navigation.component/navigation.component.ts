import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  @Input() planes: any;
  @Output() onViewDetails = new EventEmitter<string>();
  @Output() onSwapIsClicked = new EventEmitter<boolean>();

  isClicked = false;
  description = null;
  image = null;

  viewDetails(plane) {
    this.isClicked = true;
    this.description = plane.description;
    this.image = plane.image;

    this.onViewDetails.emit(plane);
    this.onSwapIsClicked.emit(this.isClicked);
  }

  hideDetails() {
    this.isClicked = false;
    this.onSwapIsClicked.emit(this.isClicked);
  }
}

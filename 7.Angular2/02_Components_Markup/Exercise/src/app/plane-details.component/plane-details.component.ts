import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-plane-details',
  templateUrl: './plane-details.component.html',
  styleUrls: ['./plane-details.component.css']
})

export class PlaneDetailsComponent implements OnChanges {

  @Input() description: string;
  @Input() image: string;

  _description = '';
  totalDescriptionLength = 0;
  remainingDescriptionLength = 0;
  descriptionStartIndex = 0;
  isDescriptionTotal = false;
  descriptionTextLengthStep = 500;
  isShowImage = false;
  isDisplayViewPlane = true;
  fontSize = 16;
  fontColor = 'black';
  colorIndex = 0;
  bckgrColor = 'white';
  bckgrIndex = 0;
  block = 'block';

  ngOnChanges() {
    console.log(this.isDescriptionTotal);
    this.isShowImage = false;
    this.isDisplayViewPlane = true;
    this.fontSize = 16;
    this.fontColor = 'black';
    this.colorIndex = 0;
    this.bckgrColor = 'white';
    this.bckgrIndex = 0;
    this.descriptionStartIndex = 0;
    this.isDescriptionTotal = false;

    this.totalDescriptionLength = this.description.length;
    this.remainingDescriptionLength = this.description.length;
    this._description = this.description.slice(this.descriptionStartIndex, this.descriptionTextLengthStep);
    this.remainingDescriptionLength -= this._description.length;
    this.descriptionStartIndex = this.descriptionTextLengthStep;

    if (this.remainingDescriptionLength <= this.descriptionTextLengthStep) {
      this.isDescriptionTotal = true;
      this._description = this.description;
    }
  }

  showMore() {
    if (this.remainingDescriptionLength <= this.descriptionTextLengthStep) {
      this.isDescriptionTotal = true;
    }

    this._description += this.description.slice(this.descriptionStartIndex, this.descriptionStartIndex + 500);
    this.remainingDescriptionLength -= this.descriptionTextLengthStep;
    this.descriptionStartIndex += this.descriptionTextLengthStep;
  }

  showImage() {
    this.isShowImage = true;
    this.isDisplayViewPlane = false;
  }

  hideImage() {
    this.isShowImage = false;
    this.isDisplayViewPlane = true;
  }

  increaseFontSize() {
    let currFontSize = this.fontSize;
    if (currFontSize >= 32) {
      return;
    }
    currFontSize += 4;
    this.fontSize = currFontSize;
  }

  decreaseFontSize() {
    let currFontSize = this.fontSize;
    if (currFontSize <= 8) {
      return;
    }
    currFontSize -= 4;
    this.fontSize = currFontSize;
  }

  changeTextColor() {
    const colors = ['black', 'cyan', 'magenta', 'yellow', 'blue', 'green'];
    if (this.colorIndex >= 5) {
      this.colorIndex = -1;
    }
    this.colorIndex++;
    this.fontColor = colors[this.colorIndex];
  }

  changeBckgrColor() {
    const colors = ['white', 'gray', 'pink', 'beige', 'purple', 'yellow'];
    if (this.bckgrIndex >= 5) {
      this.bckgrIndex = -1;
    }
    this.bckgrIndex++;
    this.bckgrColor = colors[this.bckgrIndex];
  }
}

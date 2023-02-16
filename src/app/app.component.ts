import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'REM Calculator';

  rootPxFontValue:any = '';
  valToConvert = [];
  remValue:any[] = [];
  selectOptions:any[] = [];

  ngOnInit() {
    this.addSelectOptions();
  }

  addSelectOptions() {
    const startValue = 8;
    for (let i = startValue; i <= 64; i+=2) {
      this.selectOptions.push(i + "px");
    }
  }

  onSelected(value: any) {
    let font = value;
    const fontValue = font.split("px", 1);
    this.rootPxFontValue = fontValue[0];
  }
  getValueToConvert(value: any) {
    const onlyNumber = /[^0-9]/;
    let toConvert = value;
    this.valToConvert = toConvert.split(onlyNumber);
    this.remValue = this.valToConvert.map(item => item / this.rootPxFontValue);
  }
}
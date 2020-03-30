import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {CovidService} from './services/covid.service';
interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  covidData :any = [];
  countries: Country[] = [
    {value: 'india', viewValue: 'India'},
    {value: 'uae', viewValue: 'UAE'},
    {value: 'usa', viewValue: 'USA'},
    {value: 'italy', viewValue: 'Italy'},
    {value: 'iran', viewValue: 'Iran'},
    {value: 'spain', viewValue: 'Spain'},
    {value: 'china', viewValue: 'China'},
  ];
  countryFlag = '';
  selectedCountry = null;
  selectedCountryControl = new FormControl(this.selectedCountry);

  constructor(private covidService :CovidService) { }

  ngOnInit() {
    this.getCountryData('india');

  }

  getCountryData(ctry) {
    this.covidService.getData(ctry).subscribe(
      data => {
        this.covidData = data
        this.countryFlag = data.countryInfo.flag;
        console.log(this.covidData);
        // console.log(this.countryFlag);
      }
    );

  }

  onSelectCoutry(ctry) {
    this.getCountryData(ctry);
  }
}

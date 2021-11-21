import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchInput: string = '';
  searchResultText: string;
  containsError: boolean = false;
  numberOfCases = [
    { city: 'Istanbul', noOfCases: 2340 },
    { city: 'Hamburg', noOfCases: 865 },
  ];
  showAll: boolean = false;

  getNumberOfCasesForCity(): void {
    if (this.isSearchTermValid()) {
      const searchResult = this.numberOfCases.find(
        (cases) => cases.city === this.searchInput
      );
      console.log(searchResult);
      if (!!searchResult) {
        this.searchResultText =
          'Number of cases for ' +
          this.searchInput +
          ' : ' +
          searchResult.noOfCases;
        this.containsError = false;
      } else {
        this.searchResultText = "The city you're looking for is not found.";
        this.containsError = true;
      }
    } else {
      this.searchResultText = 'Please enter a city name';
      this.containsError = true;
    }
  }

  resetSearchAndResult(): void {
    this.searchInput = '';
    this.searchResultText = '';
    this.containsError = false;
    this.showAll = false;
  }

  showAllCases(): void {
    this.showAll = true;
  }

  private isSearchTermValid(): boolean {
    return !!this.searchInput;
  }
}

export interface CountryInfo {
  iso2: string;
  lat: number;
  long: number;
}

export interface CountryData {
  country: string;
  countryInfo: CountryInfo;
  active: number;
  recovered: number;
  deaths: number;
}

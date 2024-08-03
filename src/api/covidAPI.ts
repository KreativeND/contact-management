import axios from "axios";
import { CountryData } from "../schema/country";

export const fetchGlobalData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
};

export const fetchHistoricalData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

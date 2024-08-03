import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { fetchCountryData } from "../api/covidAPI";
import { CountryData } from "../schema/country";

const Map: React.FC = () => {
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["countryData"],
    queryFn: fetchCountryData,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching data</div>;

  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-96 w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data?.map((country) => (
        <Marker
          key={country.countryInfo.iso2}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <strong>{country.country}</strong>
            <br />
            Active: {country.active}
            <br />
            Recovered: {country.recovered}
            <br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

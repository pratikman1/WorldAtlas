import axios from "axios";

const api = axios.create({
  baseURL: "https://countries.dev",
});

// HTTP GET METHod

export const getCountryData = () => {
  return api.get(
    "/countries?sort=population&order=desc&fields=name,population,languages,flags,capital,region,topLevelDomain",
  );
};

// HTTP GET METHod for the individual country name

export const getCountryIndividualData = (name) => {
  return api.get(
   `/name/${name}?sort=population&order=desc&fields=name,population,languages,flags,capital,region,topLevelDomain`,
  );
};
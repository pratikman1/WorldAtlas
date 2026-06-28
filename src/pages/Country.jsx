import React from "react";
import { useEffect } from "react";
import { getCountryData } from "../api/postApi";
import { useTransition } from "react";
import { useState } from "react";
import Loader from "./Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  // const country = async () => {
  //   const res = await fetch(
  //     "https://countries.dev/countries?sort=population&order=desc&fields=name,population",
  //   );
  //   const data = await res.json();

  //   console.log(data, "pra");
  // };
  // country()

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  // console.log(countries, "praman");

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // console.log(search, filter)

  const searchCountry = (country) => {
    if (search) {
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  };

  // here is the main logic
  const filtercountries = (countries || []).filter(
    (country) => searchCountry(country) && filterRegion(country),
  );
  return (
    <section id="country-section" className="py-8 px-4 sm:px-6 lg:px-8">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-3/4 m-auto">
        {filtercountries.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;

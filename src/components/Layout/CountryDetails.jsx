import React from "react";
import { useEffect } from "react";
import { useTransition } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndividualData } from "../../api/postApi";
import Loader from "../../pages/Loader";

const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  //   console.log(country, "pratik");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndividualData(params.id);
      //   console.log(res, "aryan");
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
        <div className="flex justify-center">
          <img
            src={country?.flags?.svg}
            alt={country?.name || "Country flag"}
            className="w-full max-w-xl rounded-3xl border border-white/10 shadow-xl shadow-black/20 object-cover"
          />
        </div>

        <div className="space-y-4 rounded-3xl bg-slate-900/90 p-6 shadow-xl shadow-black/20 text-white">
          <p className="text-2xl font-semibold text-white">{country.name}</p>
          <div className="space-y-3 text-sm sm:text-base text-slate-200">
            <p className="break-words">
              <span className="font-semibold text-white/80">Capital:</span>{" "}
              <span>{country.capital || "N/A"}</span>
            </p>
            <p className="break-words">
              <span className="font-semibold text-white/80">Population:</span>{" "}
              <span>{country?.population?.toLocaleString() || "N/A"}</span>
            </p>
            <p className="break-words">
              <span className="font-semibold text-white/80">Region:</span>{" "}
              <span>{country.region || "N/A"}</span>
            </p>
            <p className="break-words">
              <span className="font-semibold text-white/80">Language:</span>{" "}
              <span>{country?.languages?.[0]?.name || "N/A"}</span>
            </p>
            <p className="break-words">
              <span className="font-semibold text-white/80">
                Top Level Domain:
              </span>{" "}
              <span>{country.topLevelDomain || "N/A"}</span>
            </p>
          </div>
        </div>

        <div >
          <NavLink to="/country">
            <button className="text-black bg-white/70 p-2 rounded-lg cursor-pointer hover:bg-white/50 hover:scale-102 translate-all">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;

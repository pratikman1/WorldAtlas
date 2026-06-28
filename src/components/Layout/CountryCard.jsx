import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const {
    name,
    population,
    languages,
    flags,
    region,
    topLevelDomain,
    capital,
  } = country;
  return (
    <li className="bg-white/10 rounded-3xl p-6  shadow-xl shadow-slate-900/10 transition hover:-translate-y-2 hover:shadow-2xl h-auto break-words">
      <div className="flex flex-col gap-5">
        <div>
          <img src={flags.svg} alt="" />
        </div>
        <div className="space-y-3 text-sm sm:text-base">
          <p className="text-lg font-semibold text-white/80">{name}</p>
          <p>
            <span className="font-semibold text-white/80">Capital:</span>{" "}
            <span className="text-white/80">{capital}</span>
          </p>
          <p>
            <span className="font-semibold text-white/80">Population:</span>{" "}
            <span className="text-white/80">{population.toLocaleString()}</span>
          </p>
          <p>
            <span className="font-semibold text-white/80">Region:</span>{" "}
            <span className="text-white/80">{region}</span>
          </p>
          <p>
            <span className="font-semibold text-white/80">Language:</span>{" "}
            <span className="text-white/80">{languages[0].name}</span>
          </p>
          <p>
            <span className="font-semibold text-white/80">
              Top Level Domain:
            </span>
            <span className="text-white/80">{topLevelDomain}</span>
          </p>

          <NavLink to={`/country/${name}`}>
            <button className=" sm:w-auto inline-flex items-center justify-center gap-2 text-white bg-amber-500 px-6 py-3 rounded-xl cursor-pointer hover:bg-amber-900 hover:scale-105 transition-transform duration-200 mt-5">
              Read more
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;

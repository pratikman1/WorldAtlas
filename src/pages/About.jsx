import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  console.log(countryFacts);
  return (
    <section className=" p-2 sm:p-6 lg:p-8 mx-4 sm:mx-6 lg:mx-40  my-8">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Here are the interesting Facts <br /> we're proud of
        </h2>
      </div>

      <div
        id="gradientcard"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
        {countryFacts.map((country, id) => {
          return (
            <div
              key={id}
              id="card"
              className="  break-words space-y-4 rounded-3xl bg-slate-900/90 p-6 shadow-xl shadow-black/20 text-white hover:scale-102 hover:shadow-white/10">
              <div id="cardcontainer" className="space-y-2">
                <p id="card-title" className="text-lg font-semibold">
                  {country.countryName}
                </p>
                <p>
                  <span id="card-description" className="text-white">
                    Capital:
                  </span>
                  <span className="ml-2">{country.capital}</span>
                </p>
                <p>
                  <span id="card-description" className="text-white">
                    Population:
                  </span>
                  <span className="ml-2">{country.population}</span>
                </p>
                <p>
                  <span id="card-description" className="text-white">
                    Interesting Fact:
                  </span>
                  <span className="ml-2">{country.interestingFact} </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;

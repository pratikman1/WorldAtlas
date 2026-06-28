import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid gap-4 md:grid-cols-[1.5fr_auto] lg:grid-cols-[1.4fr_auto_auto] items-center">
        <input
          className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
        />

        <div className="flex flex-wrap gap-2 justify-end">
          <button
            className="rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            onClick={() => sortCountries("asc")}>
            Asc
          </button>
          <button
            className="rounded-3xl bg-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-600"
            onClick={() => sortCountries("des")}>
            Des
          </button>
        </div>

        <div className="flex justify-end">
          <select
            className="w-full max-w-xs rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            value={filter}
            onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;

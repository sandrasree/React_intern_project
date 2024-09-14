import React, { useState } from "react";
import countries from './country-search/index.json'; 
import './styles.css';


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    const filtered = countries.filter(country =>
      country.country.toLowerCase().includes(value) ||
      country.capital.toLowerCase().includes(value)
    );
    setFilteredResults(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search by country or capital..."
        style={styles.searchInput}
      />
      <ul>
        {filteredResults.map((result, index) => (
          <li key={index}>{result.country} - {result.capital}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  searchInput: {
    padding: "10px",
    width: "100%",
    fontSize: "16px"
  }
};

export default SearchBar;

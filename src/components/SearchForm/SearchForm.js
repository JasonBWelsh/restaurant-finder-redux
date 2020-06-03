import React from 'react';
import { useSelector } from 'react-redux';
import { StyledSearchForm } from './styles';

const SearchForm = ({ handleCityInput, handleSearchSubmit, handleFilter }) => {
  const city = useSelector((state) => state.city);
  const filter = useSelector((state) => state.filter);

  return (
    <StyledSearchForm onSubmit={handleSearchSubmit}>
      <div className="input-wrapper">
        <label htmlFor="search-city-input" className="input-label">
          Search by city:{' '}
        </label>
        <input
          id="search-city-input"
          className="form-input"
          type="text"
          value={city}
          onChange={handleCityInput}
        />
        {/* <button type="submit">search city</button> */}
      </div>
      <div className="input-wrapper">
        <label htmlFor="filter-results-input" className="input-label">
          Filter results:{' '}
        </label>
        <input
          id="filter-results-input"
          className="form-input"
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;

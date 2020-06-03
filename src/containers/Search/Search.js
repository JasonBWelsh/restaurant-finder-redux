import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import List from '../../components/List/List.js';

const API_ENDPOINT = 'http://opentable.herokuapp.com/api/restaurants?city=';

function Search() {
  // react-redux hooks
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const city = useSelector((state) => state.city);
  const filter = useSelector((state) => state.filter);
  //
  const [url, setUrl] = useState(`${API_ENDPOINT}${city}`);

  const handleFetchRestaurants = useCallback(() => {
    dispatch({ type: 'RESTAURANTS_FETCH_INIT' });

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatch({
          type: 'RESTAURANTS_FETCH_SUCCESS',
          payload: response.data.restaurants,
        });
      } catch {
        dispatch({ type: 'FETCH_RESTAURANTS_FAILURE' });
      }
    };
    fetchRestaurants();
  }, [url, dispatch]);

  useEffect(() => {
    handleFetchRestaurants();
  }, [handleFetchRestaurants]);

  const handleCityInput = (event) => {
    dispatch({ type: 'CITY_SET', payload: event.target.value });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setUrl(`${API_ENDPOINT}${city}`);
  };

  const handleFilter = (event) => {
    dispatch({ type: 'FILTER_SET', payload: event.target.value });
  };

  return (
    <div>
      <SearchForm
        handleCityInput={handleCityInput}
        handleSearchSubmit={handleSearchSubmit}
        handleFilter={handleFilter}
      />
      <List
        restaurants={restaurants.filter((rest) =>
          rest.name.toLowerCase().includes(filter.toLowerCase())
        )}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default Search;

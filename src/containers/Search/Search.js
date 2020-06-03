import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import List from '../../components/List/List.js';

const API_ENDPOINT = 'http://opentable.herokuapp.com/api/restaurants?city=';

function Search() {
  // react-redux hooks
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const city = useSelector((state) => state.city);
  //
  const [filter, setFilter] = useState('');
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
    // setCity(event.target.value);
    dispatch({ type: 'CITY_SET', payload: event.target.value });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setUrl(`${API_ENDPOINT}${city}`);
  };

  const handleFilter = (event) => {
    console.log('handleFilter log restaurantList:', restaurants.data);
    setFilter(event.target.value);
  };

  return (
    <div>
      <SearchForm
        city={city}
        filter={filter}
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

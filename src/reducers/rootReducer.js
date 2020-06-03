const initialState = {
  restaurants: [],
  isLoading: false,
  isError: false,
  city: 'toronto',
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'RESTAURANTS_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurants: action.payload,
      };
    case 'RESTAURANTS_FETCH_FAILURER':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'CITY_SET':
      return {
        ...state,
        city: action.payload,
      };
    case 'FILTER_SET':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

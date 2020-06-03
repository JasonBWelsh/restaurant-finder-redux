const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  city: 'toronto',
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
        data: action.payload,
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
    default:
      return state;
  }
};

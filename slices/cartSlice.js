
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchQuoteSuccess, fetchQuoteFailure } from './quoteSlice'; 

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalItems += 1;
    },
  },
});

export const fetchRandomQuote = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const quote = response.data.content + ' - ' + response.data.author;
      dispatch(fetchQuoteSuccess(quote)); 
    } catch (error) {
      dispatch(fetchQuoteFailure(error.message)); //  action creator
    }
  };
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

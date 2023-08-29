import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cartReducer from './cartSlice';
import quoteReducer from './quoteSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    quote: quoteReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;

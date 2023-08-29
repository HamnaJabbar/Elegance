import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: '',
    loading: false,
    error: null,
  },
  reducers: {
    fetchQuoteSuccess: (state, action) => {
      state.loading = false;
      state.quote = action.payload;
      state.error = null;
    },
    fetchQuoteFailure: (state, action) => {
      state.loading = false;
      state.quote = '';
      state.error = action.payload;
    },
  },
});

export const { fetchQuoteSuccess, fetchQuoteFailure } = quoteSlice.actions;
export default quoteSlice.reducer;

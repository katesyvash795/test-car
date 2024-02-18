import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileage: {
    from: '',
    to: ''
  }
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.mileage.from = action.payload;
    },
    setMileageTo: (state, action) => {
      state.mileage.to = action.payload;
    }
  }
});

export const { setBrand, setPrice, setMileageFrom, setMileageTo } = filterSlice.actions;

export default filterSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/category_slice'; // Import your slice reducer
import productReducer from './slices/product_slice';
const store = configureStore({
  reducer: {
    category: categoryReducer, // Add your category reducer
    products: productReducer
  },
  devTools:true,
});

export default store;

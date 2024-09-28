import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products_slice",
  initialState: {
    allproducts:[],
    cate_products:[],
    search:"",
    currentPage: 1, 
    productsPerPage: 10, 
  }, 
  reducers: {
    setallproducts:(state,action)=>{
        state.allproducts = action.payload;
        state.cate_products = action.payload;
    },
    setcategoryproducts:(state,action)=>{
        const category = action.payload;
        state.cate_products = category === "all"
           ? state.allproducts
           : state.allproducts.filter(product=>product.category === category);
    },
    setsearch:(state,action)=>{
        state.search = action.payload;
    },
    setcurrentpage: (state, action) => {
        state.currentPage = action.payload; 
    }
  },
});

// Export the action creator for choosing a category
export const { setallproducts , setcategoryproducts , setsearch,setcurrentpage} = productSlice.actions;

// Export the reducer to be used in the store
export default productSlice.reducer;

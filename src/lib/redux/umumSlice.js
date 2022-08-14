import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allList: [],
  list: [],
  category: [],
  printItems: [],
};

export const umumSlice = createSlice({
  name: "umum",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.allList.push(action.payload);
      state.list.push(action.payload);
    },
    addCategory: (state, action) => {
      let arr = state.category;

      arr.push(action.payload);
      const uniqueArr = [...new Set(arr)];

      state.category = uniqueArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, addCategory } = umumSlice.actions;

export default umumSlice.reducer;

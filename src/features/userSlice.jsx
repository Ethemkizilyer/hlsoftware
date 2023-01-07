import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  user: {},
  productsData:[],
};

let token =process.env.TOKEN_KEY

// postApp
export const postApp = createAsyncThunk(
  "postApp/postApp",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post(
        `https://api.kitapbulal.com/chat/add`,
        data,
        {
          headers: {
            Authorization: `sAuth ${token}`,
          },
        }
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

// getProductsData
export const getProductsData = createAsyncThunk(
  "product/getProductsData",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.kitapbulal.com/test/getproducts`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // postApp
      .addCase(postApp.pending, (state) => {
        state.loading = true;
      })
      .addCase(postApp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(postApp.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      // getProductsData
      .addCase(getProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
        state.error = false;
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default userSlice.reducer;

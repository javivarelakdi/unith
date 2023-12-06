import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Image {
  image: string;
  title: string;
  description: string;
  index: number;
}
export const fetchImages = createAsyncThunk<
  any[],
  void,
  { rejectValue: string }
>("image/fetchImages", async (_, thunkAPI) => {
  try {
    const response = await fetch("http://54.73.73.228:4369/api/images");
    const data = await response.json();
    const images = Object.values(data);
    return images;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch images.");
  }
});
interface ImagesState {
  images: Image[];
  loading: boolean;
  error: string | null;
}
const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};
export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload?.sort((a, b) => a.index - b.index);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default imagesSlice.reducer;

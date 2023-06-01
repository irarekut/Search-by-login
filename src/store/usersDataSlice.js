import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
const initialState = {
  usersData: [],
};
const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setUsersData(state, action) {
      state.usersData = action.payload;
    },
    setSearchBy(state, action) {
      state.searchBy = action.payload;
    },
    setIsSearching(state, action) {
      state.isSearching = action.payload;
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPopupStatus(state, action) {
      state.popupStatus = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {
  setUsersData,
  setSearchBy,
  setIsSearching,
  setTotalCount,
  setSortBy,
  setOrder,
  setPage,
  setPopupStatus,
  setUser,
} = usersDataSlice.actions;

export default usersDataSlice.reducer;

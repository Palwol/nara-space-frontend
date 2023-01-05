import { getUsersThunk } from './users-actions';
import { UserData } from '@/api/api';
import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

export type UsersState = {
  data: UserData[];
  changedData: UserData[];
  isLoading: boolean;
  isError: SerializedError | null;
};

type ChangeUserCheckedState = {
  id: number;
};

const initialUsersState: UsersState = {
  data: [],
  changedData: [],
  isLoading: false,
  isError: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState: initialUsersState,
  reducers: {
    initChangedUsers(state) {
      state.changedData = state.data;
    },
    changeUserChecked(state, action: PayloadAction<ChangeUserCheckedState>) {
      const index = state.changedData.findIndex((user) => user.id === action.payload.id);
      const _checked = state.changedData[index].checked;
      state.changedData[index].checked = !_checked;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.changedData = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  },
});

export const { initChangedUsers, changeUserChecked } = usersSlice.actions;
export default usersSlice.reducer;

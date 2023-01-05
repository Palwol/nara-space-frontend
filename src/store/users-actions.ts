import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, updateUsers, UserData } from '@/api/api';

export const getUsersThunk = createAsyncThunk<UserData[]>('/users/getUser', async () => {
  const data: UserData[] = await getUsers();
  return data;
});

export const updateUsersThunk = createAsyncThunk<void, UserData[]>('/users/updateUser', async (data, thunkAPI) => {
  await updateUsers(data);
  thunkAPI.dispatch(getUsersThunk());
});

import axios from 'axios';

export type UserData = {
  id: number;
  name: string;
  date: string;
  comment: string;
  image: string;
  checked: boolean;
};

type UserResult = {
  result: UserData[];
};

const BASE_URL = process.env.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL || 'http://localhost:9000',
  headers: {
    patch: {
      'Content-Type': 'application/json',
    },
  },
});

export const getUsers = async () => {
  const response = await instance.get('/users/1');
  const data: UserResult = response.data;
  return data.result;
};

export const updateUsers = async (data: UserData[]) => {
  await instance.patch('/users/1', JSON.stringify({ result: data }));
};

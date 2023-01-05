import axios from 'axios';

export type UserData = {
  id: number;
  name: string;
  date: string;
  comment: string;
  image: string;
  checked: boolean;
};

const BASE_URL = process.env.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL || 'http://localhost:9000',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});

export const getUsers = async () => {
  const response = await instance.get('/users');
  return response.data;
};

export const updateUsers = async (data: UserData[]) => {
  await instance.post('/users', data);
};

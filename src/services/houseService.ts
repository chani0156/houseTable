import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/', // Set your API base URL here
});

export const createHouse = async (data: any) => {
    // try {
    //     const response = await api.get(`/houses/1`);
    //     return response.data;
    //   } catch (error) {
    //     throw new Error('Error fetching house details');
    //   }
  try {
    const response = await api.post('/houses', data);
    return response.data;
  } catch (error) {
    throw new Error('Error creating house');
  }
};

export const getHouseById = async (id: number) => {
  try {
    const response = await api.get(`/houses/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching house details');
  }
};

export const updateHouseDetails = async (id: number, data: any) => {
  try {
    const response = await api.put(`/houses/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error updating house details');
  }
};
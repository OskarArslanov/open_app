'use client';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// @ts-ignore
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (!token) return config;

  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  };
});

export default axiosInstance;

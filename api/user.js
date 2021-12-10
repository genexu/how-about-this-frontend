import { apiInstance } from '@/api/setup';

export const getUserMe = () => apiInstance.get('/users/me');

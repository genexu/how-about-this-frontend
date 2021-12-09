import { apiInstance } from '@/api/setup';

export const auth = ({ account, password }) => apiInstance.post('/auth', { account, password });

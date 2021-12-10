import { apiInstance } from '@/api/setup';

export const getCommunities = () => apiInstance.get('/communities');

export const getCommunity = ({ communityKey }) => apiInstance.get(`/icommunities/${communityKey}`);
export const getCommunityCollections = ({ communityKey }) =>
  apiInstance.get(`/communities/${communityKey}/collections`);

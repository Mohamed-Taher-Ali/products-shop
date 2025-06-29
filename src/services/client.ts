import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const client = axios.create({
  baseURL,
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const queryClient = new QueryClient({});

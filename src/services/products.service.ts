import type { IProduct } from '@/pages/products/types';
import type { IDataPage } from '@/types';
import { client } from './client';

export const fetchProducts = async (): Promise<IDataPage<{ products: IProduct[] }>> => {
  return (await client.get('/products')).data;
};

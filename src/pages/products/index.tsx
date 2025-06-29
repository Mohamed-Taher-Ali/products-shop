import { useProducts } from '@/services';
import { ProductCard } from './components';

export const ProductsPage = () => {
  const { data } = useProducts();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
      {data?.products.map(p => (
        <ProductCard key={p.id} data={p} />
      ))}
    </div>
  );
};

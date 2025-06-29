import type { IProduct } from '@/pages/products/types';

export const ProductStock = ({ stock }: Pick<IProduct, 'stock'>) => {
  const isInStock = stock > 0;

  return (
    <div className="mt-2 text-sm">
      {isInStock ? (
        <span className="text-green-600">
          {stock} Item{stock > 1 ? 's' : ''}
        </span>
      ) : (
        <span className="text-red-600">Out of stock</span>
      )}
    </div>
  );
};

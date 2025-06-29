import type { IProduct } from '@/pages/products/types';

export function ProductPrice({
  price,
  discountPercentage,
}: Pick<IProduct, 'price' | 'discountPercentage'>) {
  const discount = price * (discountPercentage / 100);
  const finalPrice = price - discount;

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-xl font-bold text-primary">{finalPrice.toFixed(2)}</span>
      {discountPercentage > 0 && (
        <>
          <span className="text-sm line-through text-gray-500">{price.toFixed(2)}</span>
          <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">
            {discountPercentage}% off
          </span>
        </>
      )}
    </div>
  );
}

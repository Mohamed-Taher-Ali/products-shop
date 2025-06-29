import { Rating } from 'react-simple-star-rating';
import { ShoppingCart } from 'lucide-react';

import { ProductDetailsDialog } from './product-details-dialog';
import { Badge, Card, InfoRow, Render } from '@/components';
import type { IProduct } from '@/pages/products/types';
import { AddToCartDialog } from './add-to-cart-dialog';
import { ProductStock } from './product-stock';
import { ProductPrice } from './product-price';
import { ProductImage } from './product-img';
import { useProductQuantity } from '@/store';

type ProductCardProps = {
  data: IProduct;
};

export const ProductCard = ({ data }: ProductCardProps) => {
  const {
    id,
    tags,
    price,
    stock,
    brand,
    images,
    rating,
    category,
    discountPercentage,
    dimensions: { depth, height, width },
  } = data;

  const quantity = useProductQuantity(id);

  return (
    <Card key={id} className="relative pt-0 gap-2 overflow-hidden ">
      <Render ifCondition={quantity}>
        <ShoppingCart className="absolute top-4 right-4 z-9 bg-gray-100 p-1 rounded-md" />
      </Render>
      <ProductImage images={images} />
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-end justify-between">
          <ProductPrice price={price} discountPercentage={discountPercentage} />
          <ProductStock stock={stock} />
        </div>
        <div className="mb-4 mt-1">
          <ProductDetailsDialog product={data} />
          <Rating
            initialValue={rating}
            fillColor="black"
            className="flex"
            allowFraction
            size={24}
            readonly
          />
        </div>

        <InfoRow label="Category" value={category} />
        <InfoRow label="Brand" value={brand || '-'} />
        <InfoRow label="Size" value={`${height} * ${width} * ${depth}`} />

        <AddToCartDialog product={data} />

        <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-gray-200">
          {tags.map(tag => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

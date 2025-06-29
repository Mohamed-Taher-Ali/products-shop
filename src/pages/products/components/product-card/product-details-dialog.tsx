import { CircleAlert } from 'lucide-react';

import {
  Dialog,
  Separator,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from '@/components/ui';
import type { IProduct } from '../../types';

type Props = {
  product: IProduct;
};

export function ProductDetailsDialog({ product }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900 cursor-pointer">{product.title}</h2>
          <CircleAlert size={16} />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{product.title}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-xl w-full object-cover max-h-60"
            />
            <div className="text-sm text-gray-500">
              {product.category} • {product.brand}
            </div>
            <div className="text-lg font-semibold text-primary">${product.price}</div>
            <div className="text-sm text-muted-foreground line-clamp-5">{product.description}</div>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-1">Basic Info</h4>
              <ul className="space-y-1">
                <li>
                  <strong>SKU:</strong> {product.sku}
                </li>
                <li>
                  <strong>Stock:</strong> {product.stock}
                </li>
                <li>
                  <strong>Availability:</strong> {product.availabilityStatus}
                </li>
                <li>
                  <strong>Rating:</strong> {product.rating}
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Pricing</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Price:</strong> ${product.price}
                </li>
                <li>
                  <strong>Discount:</strong> {product.discountPercentage}%
                </li>
                <li>
                  <strong>Min Order:</strong> {product.minimumOrderQuantity}
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Shipping & Warranty</h4>
              <p>
                <strong>Shipping Info:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Dimensions</h4>
              <p>
                {product.dimensions.height} x {product.dimensions.width} x{' '}
                {product.dimensions.depth} cm
              </p>
              <p>
                <strong>Weight:</strong> {product.weight} kg
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Metadata</h4>
              <p>
                <strong>Created:</strong> {product.meta.createdAt}
              </p>
              <p>
                <strong>Updated:</strong> {product.meta.updatedAt}
              </p>
              <p>
                <strong>Barcode:</strong> {product.meta.barcode}
              </p>
              <p>
                <strong>QR Code:</strong> {product.meta.qrCode}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-1">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-muted px-2 py-1 text-xs rounded-full text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

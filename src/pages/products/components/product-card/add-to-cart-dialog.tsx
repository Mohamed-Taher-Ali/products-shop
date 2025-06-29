import { ShoppingCart } from 'lucide-react';

import {
  Input,
  Dialog,
  Button,
  Render,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from '@/components/ui';
import { useAddToCart } from './hooks';
import type { IProduct } from '../../types';

export type AddToCartDialogProps = {
  product: IProduct;
};

export function AddToCartDialog({ product }: AddToCartDialogProps) {
  const { title, stock } = product;

  const {
    action,
    isOpen,
    setOpen,
    quantity,
    isInvalid,
    handleAdd,
    totalPrice,
    setQuantity,
    handleRemove,
    storedQuantity,
  } = useAddToCart(product);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-8">
          <ShoppingCart className="w-4 h-4 mr-2" />
          {action}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{action}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

          <div className="flex items-center justify-between text-sm">
            <label className="font-medium">Quantity</label>
            <span className="text-gray-500">In stock: {stock}</span>
          </div>

          <Input
            type="number"
            min={1}
            max={stock}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />

          <div className="text-right text-sm text-gray-700">
            Total: <span className="font-semibold">{totalPrice}</span>
          </div>

          <Button
            onClick={handleAdd}
            disabled={isInvalid}
            variant="outline"
            className="mt-2 border border-gray-300 text-gray-800 hover:border-gray-500 hover:text-black">
            {action}
          </Button>

          <Render ifCondition={storedQuantity}>
            <Button
              disabled={isInvalid}
              onClick={handleRemove}
              style={{ backgroundColor: 'red', color: 'white' }}
              className="border border-gray-300 text-gray-800 hover:border-gray-500 hover:text-black">
              Remove from cart
            </Button>
          </Render>
        </div>
      </DialogContent>
    </Dialog>
  );
}

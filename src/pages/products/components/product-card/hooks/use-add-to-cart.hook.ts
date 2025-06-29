import { useCallback, useState } from 'react';

import type { AddToCartDialogProps } from '../add-to-cart-dialog';
import { useProductQuantity, useShopStore } from '@/store';

export function useAddToCart(product: AddToCartDialogProps['product']) {
  const { id, price, stock } = product;

  const shopStore = useShopStore();
  const addToCart = shopStore.addToCart;
  const removeFromCart = shopStore.removeFromCart;
  const storedQuantity = useProductQuantity(id);

  const [quantity, setQuantity] = useState(storedQuantity || 1);
  const [isOpen, setOpen] = useState(false);

  const action = storedQuantity ? 'Update cart' : 'Add to cart';

  const isInvalid = quantity < 1 || quantity > stock;
  const totalPrice = (quantity * price).toFixed(2);

  const handleAdd = useCallback(() => {
    if (isInvalid) return;

    addToCart(product, quantity);
    setOpen(false);
  }, [id, quantity]);

  const handleRemove = useCallback(() => {
    removeFromCart(id);
    setOpen(false);
  }, [id]);

  return {
    storedQuantity,
    handleRemove,
    setQuantity,
    totalPrice,
    handleAdd,
    isInvalid,
    quantity,
    setOpen,
    action,
    isOpen,
  };
}

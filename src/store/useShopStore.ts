import { persist } from 'zustand/middleware';
import { create } from 'zustand';

import type { IProduct } from '@/pages/products/types';

type CartItem = IProduct & { quantity: number };

type ShopState = {
  cart: CartItem[];
  clearCart: () => void;
  removeFromCart: (productId: string) => void;
  addToCart: (product: IProduct, quantity: number) => void;
};

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],

      clearCart: () => set({ cart: [] }),

      removeFromCart: productId => set({ cart: get().cart.filter(item => item.id !== productId) }),

      addToCart: (product, quantity = 1) => {
        const existing = get().cart.find(item => item.id === product.id);

        if (existing) {
          set({
            cart: get().cart.map(item => (item.id === product.id ? { ...item, quantity } : item)),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity }],
          });
        }
      },
    }),
    {
      name: 'shop-cart',
    },
  ),
);

export const useProductQuantity = (id: string) =>
  useShopStore(s => s.cart.find(i => i.id === id)?.quantity || 0);

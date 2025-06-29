import { ShoppingCart } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useShopStore } from '@/store';
import { Render } from '../ui';

export function CartDropdown() {
  const cart = useShopStore(s => s.cart);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Button variant="outline" size="icon">
            <ShoppingCart />
          </Button>
          <Render ifCondition={cart.length}>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold flex px-1 items-center justify-center rounded-full">
              {cart.length}
            </span>
          </Render>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 p-4 space-y-2">
        <h4 className="text-sm font-semibold">Cart</h4>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-1">
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-muted-foreground">Quantity: {item.quantity}</div>
                </div>
                <div className="text-sm font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

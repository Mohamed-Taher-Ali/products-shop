import { CartDropdown } from './cart-dropdown';
import { cn } from '@/utils';

type NavBarProps = {
  containerClassName?: string;
};

export const NavBar = ({ containerClassName }: NavBarProps) => {
  return (
    <nav
      className={cn(
        'bg-gray-900 py-4 w-full flex justify-between items-center px-[5vw] xl:px-[10vw]',
        containerClassName,
      )}>
      <div className="text-white text-md sm:text-2xl font-bold tracking-tight">
        P r 0 d 5 + 5 h 0 p 5
      </div>
      <CartDropdown />
    </nav>
  );
};

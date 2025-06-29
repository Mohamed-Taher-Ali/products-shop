import React, { useEffect } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi,
} from '@/components/ui/carousel';

export function ProductImage({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {images.map(image => (
            <CarouselItem key={image}>
              <img src={image} className="bg-gray-200 h-[clamp(250px,30vh,300px)] w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <span className="text-muted-foreground py-1 px-2 text-xs absolute bottom-[10px] bg-gray-300 rounded-lg inset-x-0 mx-auto w-max">
        Slide {current} of {count}
      </span>
    </div>
  );
}

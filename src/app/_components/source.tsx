'use client';

import cn from "classnames";

type Props = {
  name: string;
  category: string;
  on_mobile: boolean;
};

const Source = ({ name, category, on_mobile }: Props) => {
  return (
    <div className={cn('flex items-center mb-2 xl:mb-1', {
            'lg:hidden': on_mobile,
            'hidden xl:flex': !on_mobile,
        })}>
      <div className="text-sm mr-1 lg:text-md font-bold lg:mr-3">{name}</div>
      <div className="text-xs lg:text-sm">{category}</div>
    </div>
  );
};

export default Source;

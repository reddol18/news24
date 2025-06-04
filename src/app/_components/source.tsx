'use client';

type Props = {
  name: string;
  category: string;
};

const Source = ({ name, category }: Props) => {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold mr-3">{name}</div>
      <div className="text-md">{category}</div>
    </div>
  );
};

export default Source;

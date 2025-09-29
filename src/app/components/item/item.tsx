import formatDollar from '@/app/hooks/formaters/dollar';
import React from 'react';

type itemProps = {
    image: string,
    name: string,
    price: number,
    className?: string,
}

function item({image, name, price, className}: itemProps) {
  return (
    <span className={`${className} flex flex-col items-center`}>
        <span className="aspect-square size-4/5 bg-(--cambridge-blue)">{image}</span>
        <h2>{name}</h2>
        <h3>{formatDollar(price)}</h3>
    </ span>
  )
}

export default item
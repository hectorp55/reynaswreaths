import formatDollar from '@/app/hooks/formaters/dollar';
import React from 'react';
import Image from 'next/image';

type itemProps = {
    image?: string,
    name: string,
    price: number,
    className?: string,
}

function item({image, name, price, className}: itemProps) {
  return (
    <span className={`${className} flex flex-col items-center bg-white rounded`}>
        {image ? 
          <Image className="size-4/5" src={image} alt={`product image of ${name}`} width={280} height={280}></Image> :
          <span className="aspect-square size-4/5 bg-(--cambridge-blue)">{image}</span>
        }
        <h2>{name}</h2>
        <h3>{formatDollar(price)}</h3>
    </ span>
  )
}

export default item
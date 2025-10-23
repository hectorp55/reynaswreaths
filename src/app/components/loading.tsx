import React from 'react';
import Image from 'next/image';

function Loading() {
  return (
    <section className="flex justify-center">
      <Image src={'/Loading-Reynas.gif'} alt={'loading image. depicts 5 circles bouncing on screen in order from left to right'} width={150} height={150}></Image>
    </section>
  )
}

export default Loading
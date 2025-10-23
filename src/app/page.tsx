"use client"
import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item/item";
import Image from 'next/image';
import { useProductSheet } from "./hooks/queries/fetchProducts";
import Socials from "./components/socials/socials";
import { useRouter } from 'next/navigation';
import { Route } from "./components/nav-bar";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  const { data, isLoading, error } = useProductSheet();
  const router = useRouter();

  return (
    <div>
      {/* Header */}
      <Header/>
      <main className="">
        {/* Website Banner */}
        <section className="w-full h-100 bg-(--blossom-pink) relative">
          <span>
            <Image alt="Decoration banner depicting a table with construction paper on it." src="/banner.jpg" fill={true} style={{ objectFit: 'cover' }}></Image>
          </span>
        </section>
        {/* Products */}
        <section className="py-10 px-70">
          <section className="flex justify-between">
            <h1 className="text-2xl">Latest Products</h1>
            <button className="flex items-center underline" onClick={() => router.push(Route.Shop)}>
              View More 
              <MdKeyboardArrowRight/>
            </button>
          </section>
          <section className="grid grid-cols-5 gap-4">
            {isLoading && <div>Loading...</div>}
            {/* Display only first 5 items in list on home page */}
            {!isLoading && data && data.slice(0, 5).map((product) => {
              return <Item 
                key={product.name} image={product.image} 
                name={product.name} price={product.price}
                className="">
              </Item>
            })}
          </section>
        </section>
        {/* Instagram Feed */}
        <section className="p-10">
          <header className="flex justify-center text-2xl">
            <h1>Recent News</h1>
          </header>
          <Socials className="grid grid-cols-5 gap-4"/>
        </section>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

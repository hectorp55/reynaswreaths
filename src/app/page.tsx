import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item/item";
import Image from 'next/image';

const placeHolderItems: item[] = [
  {
    image: "image",
    name: "name1",
    price: 100
  },
  {
    image: "image",
    name: "name2",
    price: 100
  },
  {
    image: "image",
    name: "name3",
    price: 100
  },
  {
    image: "image",
    name: "name4",
    price: 100
  },
  {
    image: "image",
    name: "name5",
    price: 100
  },
  {
    image: "image",
    name: "name6",
    price: 100
  },
  {
    image: "image",
    name: "name7",
    price: 100
  },
  {
    image: "image",
    name: "name8",
    price: 100
  },
  {
    image: "image",
    name: "name9",
    price: 100
  },
  {
    image: "image",
    name: "name10",
    price: 100
  },
];

export default function Home() {

  return (
    <div>
      <Header/>
      <main className="">
        <section className="w-full h-100 bg-(--blossom-pink) relative">
          <span>
            <Image alt="Decoration banner depicting a table with construction paper on it." src="/banner.jpg" fill={true} style={{ objectFit: 'cover' }}></Image>
          </span>
        </section>
        <section className="flex flex-wrap justify-between p-10">
          {placeHolderItems.map((item) => {
            return <Item 
              key={item.name} image={""} 
              name={item.name} price={item.price}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
            </Item>
          })}
          {/* Items */}
        </section>
      </main>

      <Footer/>
    </div>
  );
}

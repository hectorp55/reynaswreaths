import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export enum Route {
  Home = "/",
  NewArrivals = "/newarrivals",
  UpcomingEvents = "/events",
  Shop = "/products"
}

function NavBar() {
  const router = useRouter();
  const activePathName = usePathname();

  const navigate = (route: string) => {
    router.push(route);
  }

  const activeClassNames = 'underline';

  const isRouteActive = (route: string) => {
    return route === activePathName;
  }

  const getRouteClassName = (route: string) => {
    if (isRouteActive(route)) {
      return activeClassNames;
    }

    return '';
  }

  return (
    <nav className="flex justify-between gap-10 bg-(--apricot) px-5 sm:px-[15%] py-1 text-white text-lg">
      <button className={getRouteClassName(Route.Home)} onClick={() => navigate(Route.Home)}>Home</button>
      <button className={getRouteClassName(Route.UpcomingEvents)} onClick={() => navigate(Route.UpcomingEvents)}>Upcoming Events</button>
      <button className={getRouteClassName(Route.Shop)} onClick={() => navigate(Route.Shop)}>Shop</button>
    </nav>
  )
}

export default NavBar
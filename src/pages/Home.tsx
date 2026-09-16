import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import CarCard from "../components/CarCard/CarCard";
import Collections from "../components/Collections/Collections";
import Contacts from "../components/Contacts/Contacts";
import InfoTabs from "../components/InfoTabs/InfoTabs";
import Offer from "../components/Offer/Offer";
import Order from "../components/Order/Order";
import Partners from "../components/Partners/Partners";
import Promo from "../components/Promo/Promo";
import QuickSelect from "../components/QuickSelect/QuickSelect";
import Reviews from "../components/Reviews/Reviews";
import Trust from "../components/Trust/Trust";

function Home() {
  return (
    <>
      <Promo />
      <QuickSelect />
      <CarCard />
      <Collections />
      <Offer />
      <Order />
      <Partners />
      <Trust />
      <Reviews />
      <About />
      <Blog />
      <Contacts />
      <InfoTabs />
    </>
  );
}

export default Home;

import Head from "next/head";
import PromotionCard from "../components/PromotionCard";
import ProductsList from "../components/ProductsList";
import TopHeader from "../components/TopHeader";
import ContainerGrid from "../components/ContainerGrid";
import TheHeader from "../components/Header";
import MenuHeader from "../components/MenuHeader";
import CarouselProduct from "../components/CarouselProduct";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Ecommerce-app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopHeader />
      <ContainerGrid>
        <TheHeader />
        <MenuHeader />
        <CarouselProduct />
        <PromotionCard />
        <ProductsList />
        <Footer />
      </ContainerGrid>
    </main>
  );
}

import GroceryLayout from "components/layout/GroceryLayout";
import { H1, Paragraph } from "components/Typography";
import PageFooter from "components/page-footer/PageFooter";
import FDBanner from "components/banners/index";
import FDBestSellers from "components/sections/BestSellers";
import { getHomeBanners } from "../src/redux/actions/BannerActions";
import { getBestSellingData } from "../src/redux/actions/SectionsActions";
import { wrapper } from "../src/redux/Store";

import {
  getbestSellers,
  getMainCarousel,
} from "utils/api/home/carousels";

const IndexPage = () => {

  return (
    <GroceryLayout showNavbar={false}>
      <FDBanner />
      <FDBestSellers flashDeals={best_selling} />
      <PageFooter />
    </GroceryLayout>
  );
};

export default IndexPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const mainCarouselData = await getMainCarousel();
    await store.dispatch(getHomeBanners(mainCarouselData));
    const bestSellersData = await getbestSellers();
    console.log(bestSellersData)
    await store.dispatch(getBestSellingData(bestSellersData));
  }
);

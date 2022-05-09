import GroceryLayout from "components/layout/GroceryLayout";
import { H1, Paragraph } from "components/Typography";
import PageFooter from "components/page-footer/PageFooter";
import Section1 from "components/banners/index";
import Section2 from "components/sections/BestSellers";
import { getHomeBanners } from "../src/redux/actions/BannerActions";
import { getBestSellingData } from "../src/redux/actions/SectionsActions";
// import { getFlashDealsData } from "../src/redux/actions/SectionsActions";
import { wrapper } from "../src/redux/Store";
import { useSelector, useDispatch } from "react-redux";

import {
  getBigDiscountList,
  getbestSellers,
  getFlashDeals,
  getMainCarousel,
  getTopCategories,
} from "utils/api/home/carousels";

const IndexPage = () => {
  const { home_banners } = useSelector((state) => state.Home_banners);
  const { best_selling } = useSelector((state) => state.all_sections);
  console.log(best_selling);

  return (
    <GroceryLayout showNavbar={false}>
      <Section1 carouselData={home_banners} />
      <Section2 flashDeals={best_selling} />
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

import GroceryLayout from "components/layout/GroceryLayout";
import { H1, Paragraph } from "components/Typography";
import PageFooter from "components/page-footer/PageFooter";
import FDBanner from "components/banners/index";
import FDBestSellers from "components/sections/BestSellers";
import { getHomeBanners } from "redux/actions/BannerActions";
import { getBestSellingData } from "redux/actions/SectionsActions";
import { wrapper } from "redux/Store";


import {
  _getBestsellers,
  _getSliders,
} from "utils/api/home/carousels";

const IndexPage = () => {

  return (
    <GroceryLayout showNavbar={false}>
      <FDBanner />
      <FDBestSellers />
      <PageFooter />
    </GroceryLayout>
  );

};

export default IndexPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const mainCarouselData = await _getSliders();
    await store.dispatch(getHomeBanners(mainCarouselData.data.result.sliders ? mainCarouselData.data.result.sliders : []));
    const bestSellersData = await _getBestsellers();
    await store.dispatch(getBestSellingData(bestSellersData.data.result.products ? bestSellersData.data.result.products : []));
  }
);

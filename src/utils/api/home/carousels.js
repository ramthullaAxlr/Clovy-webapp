import axios from "axios";
import { BASE_URL } from '../../../constants/index'
export const getMainCarousel = async () => {
  const response = await axios.get(BASE_URL + "api/sliders/getSliders");
  return response.data.result.sliders ? response.data.result.sliders : [];
};
export const getFlashDeals = async () => {
  const response = await axios.get(BASE_URL + "api/products/bestsellingsproducts");
  return response.data.result.products ? response.data.result.products : [];
};
export const getbestSellers = async () => {
  const response = await axios.get(BASE_URL + "api/products/bestsellingsproducts");
  return response.data.result.products ? response.data.result.products : [];
};
export const getTopCategories = async () => {
  const response = await axios.get("/api/super-store/top-categories");
  return response.data;
};
export const getBigDiscountList = async () => {
  const response = await axios.get("/api/super-store/big-discounts");
  return response.data;
};

import Light from "components/icons/Light";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";
import { useSelector, useDispatch } from "react-redux";

const Section2 = () => {
  const { best_selling } = useSelector((state) => state.all_sections);

  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
    //   icon={<Light color="primary" />}
      title="Best Sellers"
      seeMoreLink="#"
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={best_selling.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {best_selling.map((item, ind) => {
            return (
              <Box py={0.5} key={ind}>
                <ProductCard1
                  id={item.id}
                  imgUrl={
                    "https://almond-house-images.s3.ap-south-1.amazonaws.com/productthumbnails_test/" +
                    item.thumbnail_image
                  }
                  title={item.product_name}
                  rating={4}
                  price={item.uoms[0].mrp}
                  discount={item.discount_percentage}
                />
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section2;

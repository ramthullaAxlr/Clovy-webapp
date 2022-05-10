import CarouselCard1 from "components/carousel-cards/CarouselCard1";
import Carousel from "components/carousel/Carousel";
import Navbar from "components/navbar/Navbar";
import { Box, Container } from "@mui/material";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const Section1 = () => {
  const { home_banners } = useSelector((state) => state.Home_banners);

  return (
    <Fragment>
      {/* <Navbar /> */}
      <Box bgcolor="white" mb={7.5}>
        <Container
          sx={{
            py: "2rem",
          }}
        >
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            {home_banners &&
              home_banners.map((data, ind) => (
                <CarouselCard1 carousel={data} key={ind} />
              ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;

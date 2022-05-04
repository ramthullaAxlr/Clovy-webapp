import { Box } from "@mui/material";
import Navbar from "components/navbar/Navbar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import GroceryHeader from "components/header/GroceryHeader";
import React, { Fragment, useCallback, useState } from "react";
import PageHead from "components/seo/PageHead";

const GroceryLayout = ({
  children,
  showNavbar = true,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed);
  }, []);
  return (
    <Fragment>
      <PageHead />
      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <GroceryHeader isFixed={isFixed} />
      </Sticky>

      <Box
        sx={{
          display: showNavbar ? "block" : "none",
        }}
        className="section-after-sticky"
        position="relative"
        zIndex={1}
      >
        <Navbar />
      </Box>
      <Box
        position="relative"
        sx={{
          background: "#fff",
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default GroceryLayout;

import React, { Fragment } from "react";
import Head from "next/head";

function PageHead({ title = "React Next.js Ecommerce Template" }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </Fragment>
  );
}

export default PageHead;

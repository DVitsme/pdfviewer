import React from "react";
import xw from "xwind";
import Card from "./Card";

function TempContainer() {
  return (
    <div>
      <div
        css={xw`container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8`}
        style={{ maxWidth: "90%" }}
      >
        <Card imgSrc="/images/unsplash.jpg" />

        <Card imgSrc="/images/unsplash.jpg" />
        <Card imgSrc="/images/unsplash.jpg" />
        <Card imgSrc="/images/unsplash.jpg" />
        <Card imgSrc="/images/unsplash.jpg" />
      </div>
    </div>
  );
}

export default TempContainer;

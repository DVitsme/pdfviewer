import React from "react";
import xw from "xwind";
import Card from "./Card";

const allPDFs = [
  {
    title:
      "Biocultural approaches to well being and sustainability indicators across scales",
  },
  {
    title: "Environment and Society",
  },
  {
    title:
      "Increasing Cultural Competence in Support of Indigenous Led Evaluation",
  },
  {
    title: "Indigenous Foodways",
  },
  {
    title: "Visionary Evaluation for a Sustainable Equitable Future Chapter 1",
  },
];

function TempContainer() {
  return (
    <div>
      <div
        css={xw`container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8`}
        style={{ maxWidth: "90%" }}
      >
        {allPDFs.map((pdf, index) => (
          <Card title={pdf.title} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TempContainer;

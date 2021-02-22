import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import Navigation from "../components/Navigation";

import xw from "xwind";
import ButtonReact from "../components/ButtonReact";
import ButtonStyled from "../components/ButtonStyled";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// <div css={xw`grid justify-center items-center h-screen space-y-20`}>
//   <div css={xw`space-y-20`}>
//     <ButtonReact>@emotion/react</ButtonReact>
//     <ButtonStyled>@emotion/styled</ButtonStyled>
//   </div>
// </div>

const Index = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const nextPage = () => {
    console.log("I fired");
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const prevPage = () => {
    console.log("I fired");
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };
  return (
    <React.Fragment>
      <Navigation />
      <div css={xw`grid justify-center items-center max-h-20 space-y-20`}>
        <div css={xw`space-y-20`}>
          {" "}
          <Document
            file="pdfs/lg_guide.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={nextPage}>Next Page</button>
          <button onClick={prevPage}>Prev Page</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;

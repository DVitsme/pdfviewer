import React, { useState } from "react";
import xw from "xwind";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ file, navigation }) => {
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
    <div css={xw`grid justify-center items-center max-h-20 space-y-20`}>
      <div css={xw`space-y-20`}>
        {" "}
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        {navigation && (
          <div>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={nextPage}>Next Page</button>
            <button onClick={prevPage}>Prev Page</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;

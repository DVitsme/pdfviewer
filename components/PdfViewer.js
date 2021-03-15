import React, { useState } from "react";
import styled from "@emotion/styled";
import xw from "xwind";

import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

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
    console.log(pageNumber);
    setPageNumber((prevPageNumber) => {
      return prevPageNumber - 1;
    });
  };

  const PDFPage = styled(Page)`
    canvas {
      width: 100% !important;
      height: auto !important;
    }
  `;

  const PrevPageStyle = () => {
    return pageNumber === 1
      ? xw`mx-2 my-2 flex items-center bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 text-gray-600 px-8 py-3 text-sm leading-6`
      : xw`mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-0 hover:bg-gray-100 rounded border border-gray-800 text-gray-800 px-8 py-3 text-sm leading-6`;
  };
  const NextPageStyle = () => {
    return pageNumber === numPages
      ? xw`mx-2 my-2 flex items-center bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 text-gray-600 px-8 py-3 text-sm leading-6`
      : xw`mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-0 hover:bg-gray-100 rounded border border-gray-800 text-gray-800 px-8 py-3 text-sm leading-6`;
  };
  return (
    <div css={xw`w-full m-auto`}>
      {navigation && (
        <div css={xw`flex justify-between items-center mt-4`}>
          <button
            onClick={prevPage}
            disabled={pageNumber === 1}
            css={PrevPageStyle}
          >
            <IoChevronBackOutline style={{ marginRight: "4px" }} />
            Prev Page
          </button>
          <p css={xw`text-xl font-light`}>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={nextPage}
            disabled={pageNumber === numPages}
            css={NextPageStyle}
          >
            Next Page
            <IoChevronForwardOutline style={{ marginLeft: "4px" }} />
          </button>
        </div>
      )}
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <PDFPage pageNumber={pageNumber} />
      </Document>
      {navigation && (
        <div css={xw`flex justify-between items-center mt-4 mb-10`}>
          <button
            onClick={prevPage}
            css={PrevPageStyle}
            disabled={pageNumber === 1}
          >
            <IoChevronBackOutline style={{ marginRight: "4px" }} />
            Prev Page
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={nextPage}
            css={NextPageStyle}
            disabled={pageNumber === numPages}
          >
            Next Page
            <IoChevronForwardOutline style={{ marginLeft: "4px" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;

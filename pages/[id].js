import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PdfViewer from "../components/PdfViewer";
import xw from "xwind";

const RenderPDF = () => {
  const router = useRouter();
  const [pdfName, setPDFName] = useState("");
  const { query = {} } = router || {};
  const { id = 0 } = query || {};

  useEffect(() => {
    const pdf = router?.query?.id
      ?.replace(/-/g, " ")
      ?.replace(/oe/g, "ö")
      ?.replace(/ae/g, "ä")
      ?.replace(/ue/g, "ü");
    setPDFName(pdf);
  }, [router]);
  return (
    <div>
      <div
        css={xw`text-center capitalize text-coolGray-900 text-4xl max-w-lg m-auto pt-6 pb-2`}
      >
        <h1>{pdfName}</h1>
      </div>
      <div css={xw`max-w-screen-md h-auto m-auto`}>
        {router.isFallback ? (
          <h1>Loading...</h1>
        ) : (
          <PdfViewer file={`/pdfs/${pdfName}.pdf`} navigation={true} />
        )}
      </div>
    </div>
  );
};

export default RenderPDF;

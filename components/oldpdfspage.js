import React, { useState } from "react";
import dynamic from "next/dynamic";
import xw, { cx } from "xwind";
import axios from "axios";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

const oldpdfpage = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result.replace(/(\r\n|\n|\r)/gm, ""));
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    // console.log(selectedFile);
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (encodedImage) => {
    try {
      const res = await axios.post("/api/uploadPDF", encodedImage, {
        headers: { "Content-Type": "application/pdf" },
      });
      console.log(res);
    } catch (err) {
      console.log(`Post Error: ${err}`);
    }
  };
  const handleGet = async () => {
    try {
      const res = await axios.get("/api/uploadPDF");
      console.log(res);
      return res;
    } catch (err) {
      console.log("Get Error: ", err);
    }
  };
  return (
    <div>
      <h1 css={cx(xw`text-red-400`, xw`capitalize`)}>What Do I look Like?</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          accept="application/pdf"
          value={fileInputState}
          onChange={handleFileInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {previewSource && <PdfViewer file={previewSource} navigation={false} />}
      <button
        css={xw`mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm`}
        onClick={handleGet}
      >
        Click for get request
      </button>
    </div>
  );
};

export default oldpdfpage;

import React, { useState } from "react";
import dynamic from "next/dynamic";
import xw, { cx } from "xwind";
import axios from "axios";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

const pdfs = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (encodedImage) => {
    try {
      const res = await axios.post("/api/uploadPDF", encodedImage);
      return res;
    } catch (err) {
      console.log(`Post Error: ${err}`);
    }
  };
  return (
    <div>
      <h1 css={cx(xw`text-red-400`, xw`capitalize`)}>What Do I look Like?</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          value={fileInputState}
          onChange={handleFileInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {previewSource && <PdfViewer file={previewSource} navigation={false} />}
    </div>
  );
};

export default pdfs;

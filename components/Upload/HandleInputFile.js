import { useState, useRef } from "react";

/*
 * What it takes to make this work:
 *
 * Parent Component Passes setFile down
 * This component will take the uploaded file and set it to the parents state
 *
 */

const HandleInputFile = ({ file, setFile, el }) => {
  // storing the recived file from backend

  const handleChange = (e) => {
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
  };
  // Note on how to upload if needed
  // const uploadFile = async () => {
  //   const uploadUrl = await firebase.uploadFiles(file);
  // };

  return (
    <div>
      <input type="file" ref={el} onChange={handleChange} />
    </div>
  );
};

export default HandleInputFile;

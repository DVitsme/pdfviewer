import React, { useState } from "react";
import {
  IoFileTrayFullOutline,
  IoCloudUploadOutline,
  IoCloseOutline,
  IoDocumentOutline,
} from "react-icons/io5";
import xw from "xwind";
import HandleInputFile from "../Upload/HandleInputFile";

const UploadModal = ({ formData, setFormData, file, setFile, el }) => {
  const handleChange = (e) => {
    e.preventDefault;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <div css={xw`z-20`}>
        <div
          css={xw`w-full flex items-center justify-start text-gray-600 mb-5`}
        >
          <IoFileTrayFullOutline />
          <h1
            css={xw`text-left text-gray-800 text-lg font-bold tracking-normal leading-tight ml-2`}
          >
            Upload PDF
          </h1>
        </div>
        <p css={xw`mb-5 text-sm text-gray-600 text-left font-normal`}>
          Attach files for Upload
        </p>
        <div
          css={xw`flex items-center justify-start w-full mb-8 border border-dashed border-indigo-700 rounded-lg p-3`}
        >
          <div css={xw`cursor-pointer text-indigo-700`}>
            <IoCloudUploadOutline />
          </div>
          <div
            css={xw`text-base font-normal tracking-normal text-gray-800 text-left ml-4`}
          >
            <HandleInputFile
              file={file}
              setFile={setFile}
              el={el}
              name="image"
            />
          </div>
        </div>

        <div css={xw`flex justify-between flex-col w-full`}>
          <div css={xw`flex flex-col xl:w-3/6 lg:w-3/6 w-full`}>
            <label
              htmlFor="title"
              css={xw`pb-2 text-sm font-bold text-gray-800 dark:text-gray-100`}
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={setFormData}
              id="title"
              css={xw`border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100`}
              placeholder="Title"
            />
          </div>
          <div css={xw`mt-8 flex flex-col xl:w-4/5 lg:w-4/5 w-full`}>
            <label
              htmlFor="description"
              css={xw`pb-2 text-sm font-bold text-gray-800 dark:text-gray-100`}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              css={xw`border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 dark:text-gray-100 resize-none`}
              placeholder="Let the world know what this is"
              rows={5}
            />
            <p css={xw`w-full text-right text-xs text-gray-500 pt-1`}>
              Character Limit: 200
            </p>
          </div>
        </div>
        <div css={xw`relative mb-8 mt-4`}>
          <hr css={xw`h-1/6 rounded-sm bg-gray-200`} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default UploadModal;

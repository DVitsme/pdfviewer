import { useState, useRef } from "react";
import xw from "xwind";
import {
  IoFileTrayFullOutline,
  IoCloudUploadOutline,
  IoCloseOutline,
  IoDocumentOutline,
} from "react-icons/io5";

import * as firebase from "../../lib/firebase";

import UploadModal from "./Upload";
/* 
* My Thinking
* Modals work on a step basis and all state is managed by this container
* State includes:
    - users step
    - users form data
* Post to firebase will also fire from the modal making it encapslated from other components
*/

const ModalContainer = () => {
  const [formData, setFormData] = useState(""); // storing the form I kept them seprate because its just simplier
  const [file, setFile] = useState(""); // storing the uploaded file

  const [uploadedFile, setUploadedFile] = useState({}); // storing the recived file from backend
  const el = useRef(); // accesing input element

  const [visibility, setVisibility] = useState(false);

  const uploadFile = async () => {
    // const uploadUrl = await firebase.uploadFiles(file);
    // setUploadedFile(uploadUrl);
    console.log(file);
    console.log(formData);
    setFormData({ ...formData, file });
    console.log(`finial submit`, formData);
  };
  return (
    <div>
      <div className="mt-10">
        <ContainerBodyStlying
          visibility={visibility}
          setVisibility={setVisibility}
          uploadFile={uploadFile}
        >
          <UploadModal
            formData={formData}
            setFormData={setFormData}
            file={file}
            setFile={setFile}
            el={el}
          />
        </ContainerBodyStlying>
      </div>
      <div css={xw`w-full flex justify-center py-12`} id="button">
        <button
          css={xw`focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm`}
          onClick={() => setVisibility(!visibility)}
        >
          Open Modal
        </button>
      </div>
      {console.log("file uploaded", uploadedFile)}
      {/* displaying received image*/}
      {/* data.path && <img src={data.path} alt={data.name} /> */}
    </div>
  );
};

const ContainerBodyStlying = ({
  children,
  visibility,
  setVisibility,
  uploadFile,
}) => {
  return (
    <div
      css={
        visibility
          ? xw`py-12 bg-gray-300 bg-opacity-75 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0`
          : xw`hidden`
      }
    >
      <div role="alert" css={xw`container mx-auto w-11/12 md:w-2/3 max-w-lg`}>
        <div
          css={xw`relative p-4 md:p-8 bg-white shadow-md rounded border border-gray-400`}
        >
          {children}
          <div css={xw`flex items-center justify-start w-full z-10`}>
            <button
              css={xw`focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm`}
              onClick={uploadFile}
            >
              Submit
            </button>
            <button
              css={xw`focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm`}
            >
              Cancel
            </button>
          </div>
          <div
            css={xw`cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out`}
            onClick={() => setVisibility(!visibility)}
          >
            <IoCloseOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;

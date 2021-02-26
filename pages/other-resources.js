import React from "react";
import axios from "axios";

const name = { firstName: "Derrick", lastName: "Value" };

const getData = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/uploadPDF", {
      name,
    });
    console.log(res);
  } catch (error) {
    console.log("Error GET: ", error);
  }
};
const OtherResources = () => {
  getData();
  return (
    <div>
      <h1>Im still not sure about the url for this...consider slugify</h1>
    </div>
  );
};

export default OtherResources;

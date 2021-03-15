import cloudinary from "../../utils/cloudinary";
import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    return handleGet(req, res);
    // Process a POST request
  } else if (req.method === "POST") {
    return handlePost(req, res);
  } else {
    // Handle any other HTTP method
    res.status(200).json({ method: "everything else" });
  }
}

// Process a Get Request
const handleGet = (req, res) => {
  console.log(process.env.CLOUDINARY_CLOUD_NAME);
  console.log(JSON.stringify(req.body));
  return res.status(200).json({ success: true, data: "handled get request" });
};

// Process a POST request
const handlePost = async (req, res) => {
  try {
    await cloudinary.uploader.upload(
      JSON.stringify(req.body),
      { async: true },
      function (error, result) {
        console.log(error, "error inside cloudinary post: ");
        console.log(result, "PDF POSTED");
      }
    );
    console.log("I posted");
    res.status(200).json({ success: true, sendBack: req.body });
  } catch (err) {
    console.log(err, "Upload PDF error: ");
    res.json({ success: false, data: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "25mb",
    },
  },
};

// fs.writeFileSync("./failedUpload.json", err);
// await cloudinary.uploader.upload(
//   JSON.stringify(req.body),
//   function (error, result) {
//     console.log("PDF POSTED");
//   }
// );

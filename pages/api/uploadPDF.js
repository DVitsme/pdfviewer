export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ method: "get" });
    // Process a POST request
  } else if (req.method === "POST") {
    return handlePost(req, res);
  } else {
    // Handle any other HTTP method
    res.status(200).json({ method: "everything else" });
  }
}

// Process a POST request
const handlePost = (req, res) => {
  return res.status(200).json(req.body);
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "25mb",
    },
  },
};

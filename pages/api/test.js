export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// Sample upload code
// cloudinary.uploader.upload(
//   "sample.jpg",
//   { crop: "limit", tags: "samples", width: 3000, height: 2000 },
//   function (result) {
//     console.log(result);
//   }
// );

// Sample image manipulation tag
// cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

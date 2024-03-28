export default function handler(req, res) {
  res.setPreviewData({ user: "Khai Truong" });
  // res.end("Preview mode enabled!");
  res.redirect(req.query.redirect);
}

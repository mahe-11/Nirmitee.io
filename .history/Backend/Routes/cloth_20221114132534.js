const { request, response } = require("express");
const express = require("express");
const {
  getAllCloths,
  addCloth,
  deleteCloth,
  getCloth,
  updateCloth,
  priceFilter,
} = require("../Controllers/clothController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const { isAuthenticated } = require("./../MiddleWare/auth");
const router = express.Router();

router.get("/", getAllCloths);
router.get("/:id", getCloth);
router.get("/filter", priceFilter);
router.post("/add", isAuthenticated, upload.single("clothImage"), addCloth);
router.delete("/:id", isAuthenticated, deleteCloth);
router.put("/:id", isAuthenticated, updateCloth);

module.exports = router;

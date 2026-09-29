const express = require("express");
const {
  register,
  login,
  updateProfileImage,
} = require("../controllers/authController");

const upload = require("../middleware/uploadMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", upload.single("profileImage"), register);

router.post("/login", login);

router.put(
  "/profile-image",
  authMiddleware,
  upload.single("profileImage"),
  updateProfileImage
);

module.exports = router;
const express = require("express");

const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBlog);
router.get("/", getBlogs);
router.delete("/:id", authMiddleware, deleteBlog);
router.put("/:id", authMiddleware, updateBlog);

module.exports = router;
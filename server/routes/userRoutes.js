import express from "express";
import {
  register,
  login,
  getMyProfile,
  logout,
  searchUser,
} from "../controllers/userController.js";
import { singleAvatar } from "../middlewares/multer.js";
import authMiddleware from "../middlewares/authMiddleware.js";

let router = express.Router();

router.post("/register", singleAvatar, register);
router.post("/login", login);

// after this line all routes will use this middleware
router.use(authMiddleware);

router.get("/", getMyProfile);
router.get("/logout", logout);
router.get("/search", searchUser);

export default router;

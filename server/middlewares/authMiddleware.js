import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/utility.js";
const authMiddleware = (req, res, next) => {
  // get cookies from req
  // if not exist then return as user is un authenticated
  // else verify the token from cookie  with jwt verify
  // pass the id to the req object
  // call next

  const cookie = req.cookies;
  const token = cookie["token"];
  if (!token) {
    return next(new ErrorHandler("User Not found", 404));
  }
  const verificationStatus = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

  if (verificationStatus) {
    req.user = verificationStatus._id;
    next();
  } else {
    return next(new ErrorHandler("UnAuthenticated User", 404));
  }
};

export default authMiddleware;

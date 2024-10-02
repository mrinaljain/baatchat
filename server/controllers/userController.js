import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TryCatch } from "../middlewares/errorHandler.js";
import { ErrorHandler } from "../utils/utility.js";

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 15 * 25 * 60 * 60 * 1000,
};
const register = async (req, res) => {
  try {
    const { name, username, password, bio } = req.body;
    let avatar = {
      public_id: "public_id",
      url: "url",
    };
    let user = await User.create({
      name,
      username,
      password,
      bio,
      avatar,
    });
    if (user) {
      var privateKey = process.env.JWT_PRIVATE_KEY;
      let token = jwt.sign({ _id: user._id }, privateKey);

      res.status(201).cookie("token", token, cookieOptions).send({
        success: true,
        data: "",
        message: "User Created Successfully",
      });
    } else {
      return next(new ErrorHandler("Unable to create user", 404));
    }
  } catch (error) {
    res.status(500).send({ success: false, data: error.message });
  }
};

//? Create user -> store in DB -> send back cookie
const login = TryCatch(async (req, res) => {
  // get username from req
  // find user with that username
  // if  user found then check password
  // if password match then send success alongside token
  // else send error password not match
  // else send user not found
  // await bcrypt.compare(password, hash);
  const { username, password } = req.body;
  console.log(username);

  const user = await User.findOne({ username: username }).select("+password");

  if (user) {
    let compare = await bcrypt.compare(password, user.password);
    if (compare) {
      var privateKey = process.env.JWT_PRIVATE_KEY;
      let token = jwt.sign({ _id: user._id }, privateKey);
      res.status(200).cookie("token", token, cookieOptions).json({
        success: true,
        data: user,
        message: "Successfully logged in!",
      });
    } else {
      return next(new ErrorHandler("Invalid Username or password", 404));
    }
  } else {
    return next(new ErrorHandler("Invalid Username or password", 404));
  }
});

const getMyProfile = async (req, res, next) => {
  const _id = req.user;

  const user = await User.findById(_id);
  if (user) {
    res.status(200).json({ success: true, data: user, message: "Success" });
  } else {
    return next(new ErrorHandler("User not found", 404));
  }
};

const logout = async (req, res) => {
  const _id = req.user;

  const user = await User.findById(_id);
  if (user) {
    res
      .status(200)
      .cookie("token", "", { ...cookieOptions, maxAge: 0 })
      .json({ success: true, data: {}, message: "Logged out successfully" });
  } else {
    return next(new ErrorHandler("User not found", 404));
  }
};

const searchUser = async (req, res) => {
  // get username from querry params
  // use the name to find user from DB

  const query = req.query;
  const username = query.username;

  const user = await User.findOne({ username });

  if (user) {
    res.status(200).json({ success: true, data: user, message: "Success" });
  } else {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json(query);
};

export { register, login, getMyProfile, logout, searchUser };

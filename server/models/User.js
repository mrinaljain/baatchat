import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    bio: {
      type: String,
      required: true,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // Check if the password field has been modified (or is new)
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

// ensuring that model is not created again and again
const User = mongoose.models.User || model("User", userSchema);

export default User;

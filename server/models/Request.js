import mongoose, { Schema, Model, Types, model } from "mongoose";

const requestSchema = new Schema(
  {
    receiver: {
      type: Types.ObjectId,
      ref: "User",
    },
    sender: {
      type: Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
  },
  { timestamps: true }
);

const requestModel =
  mongoose.models.requestModel || model("Request", requestSchema);

export default requestModel;

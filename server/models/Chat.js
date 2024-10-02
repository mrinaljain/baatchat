import mongoose, { Schema, Types, model } from "mongoose";

let chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    group_chat: {
      type: Boolean,
      default: false,
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
    creator: {
      type: Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

let Chat = mongoose.models.Chat || model("Chat", chatSchema);

export default Chat;

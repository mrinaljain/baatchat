import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { TryCatch } from "../middlewares/errorHandler.js";
import Chat from "../models/Chat.js";
import { emmitEvent } from "../utils/config/features.js";
import { ErrorHandler } from "../utils/utility.js";

const createGroupChat = async (req, res, next) => {
  // get following from req.body {name, group_chat, avatar, members}
  //add creator from our side as user is the creator
  //   now put some  checks of user count for group
  // create members array by adding creater in it
  // now create the group using chat model

  const { name, group_chat, avatar = {}, members = [] } = req.body;

  const finalMembers = [...members, req.user];
  if (finalMembers.length < 3) {
    return next(new ErrorHandler("Group should have more then 2 members", 404));
  }
  const chat = await Chat.create({
    name: name,
    group_chat: group_chat,
    avatar: avatar,
    creator: req.user,
    members: finalMembers,
  });
  if (chat) {
    emmitEvent(req, ALERT, "All", "");
    emmitEvent(req, REFETCH_CHATS, "All", "");
    res.status(200).json({ success: true, message: "Group Created" });
  } else {
    return next(new ErrorHandler("Unable to create group", 404));
  }
};
const getMyChats = async (req, res) => {
  // to find chats jiske member id mai current user exist kr rah hai
  const current_user_id = req.user;
  const chats = await Chat.find({ members: { $in: current_user_id } }).populate(
    "members",
    "avatar name"
  );
  //TODO : find other member of chat in case of 2 member (helper function)
  if (chats) {
    let transformedChats = chats.map((chat) => {
      return {
        name: chat.name,
        group_chat: chat.group_chat,
        creator: chat.creator,
        members: chat.members.reduce((acc, item) => {
          if (item._id.toString() !== current_user_id.toString()) {
            acc.push(item._id);
          }
          return acc;
        }, []),
        avatar: chat.avatar,
      };
    });
    res
      .status(200)
      .json({ success: true, data: transformedChats, message: "Chats Found" });
  } else {
    return next(new ErrorHandler("No chats found", 404));
  }
};

// groups jinka creater vo  user hai
// get user id from  jwt
// find the chats where creator is this person
const getMyGroups = TryCatch(async (req, res, next) => {
  const _id = req.user;
  const groups = await Chat.find({ creator: _id });
  if (groups) {
    res
      .status(200)
      .json({ success: true, message: "Groups found..", data: groups });
  } else {
    return next(new ErrorHandler("No groups Found", 404));
  }
});

// chatid milegi aur members ka array milega
// members ko us chat mai add karna hai
const addMembers = async (req, res, next) => {
  const { chatid, members } = req.body;

  const chat = await Chat.findById(chatid);

  if (!chat) {
    return next(new ErrorHandler("Chat not available", 404));
  }
  chat.members.push(...members);

  await chat.save();
  emmitEvent();
  emmitEvent();
  res.status(200).json({ success: true, message: "Members added", data: "" });
};

// remove member from a group with chatid and memberid
const removeMember = async (req, res) => {
  const { chatid, memberId } = req.body;

  const group = await Chat.findById(chatid);

  if (group) {
    const mofifiedmembers = group.members.filter((member) => {
      return member._id.toString() !== memberId.toString();
    });

    group.members = mofifiedmembers;
    await group.save();
    res.status(200).json({
      success: true,
      message: "Member removed",
      data: "",
    });
    //  emmitEvent();
    //  emmitEvent();
  } else {
    return next(new ErrorHandler("Group not available", 404));
  }
};

//take id from the  params
// find the group
// remove your id from list of members
const leaveGroup = async (req, res) => {};
const sendAttachment = async (req, res) => {};
const getMessages = async (req, res) => {};
const getChatDetails = async (req, res) => {};

export {
  createGroupChat,
  getMyChats,
  getMyGroups,
  addMembers,
  removeMember,
  leaveGroup,
  sendAttachment,
  getMessages,
  getChatDetails,
};

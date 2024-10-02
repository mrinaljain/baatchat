import express from "express";
import {
  addMembers,
  createGroupChat,
  getChatDetails,
  getMessages,
  getMyChats,
  getMyGroups,
  leaveGroup,
  removeMember,
  sendAttachment,
} from "../controllers/chatController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/group", createGroupChat);
router.get("/myChats", getMyChats);
router.get("/groups", getMyGroups);
router.patch("/group/members", addMembers);
router.delete("/group/member", removeMember);
router.delete("group/leave/:id", leaveGroup);
router.post("/attachment", sendAttachment);
router.get("/messages", getMessages);
router.get("/details", getChatDetails);
export default router;

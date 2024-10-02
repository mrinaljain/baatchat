import React, { memo, useEffect, useState } from "react";
import { FaBackward, FaEdit, FaHamburger, FaSave } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Drawer from "../components/dialogs/Drawer";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../utils/sampleData";
const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameValue, setGroupNameValue] = useState("");
  const navigate = useNavigate();
  const [isMobileMenueOpen, setIsMobileMenueOpen] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenueOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenueOpen(false);
  };
  const updateGroupName = (e) => {
    setIsEdit(false);
    console.log("Group name updated..!");
  };

  const GroupName = () => {
    return isEdit ? (
      <>
        <input
          type="text"
          value={groupNameValue}
          onChange={(e) => setGroupNameValue(e.target.value)}
        />
        <button onClick={(e) => updateGroupName(e)}>
          <FaSave />
        </button>
      </>
    ) : (
      <div className="flex flex-row items-center gap-10">
        <h2>{groupName}</h2>
        <button onClick={(e) => setIsEdit(true)}>
          <FaEdit />
        </button>
      </div>
    );
  };

  useEffect(() => {
    setGroupName(`Group No ${chatId}`);
    setGroupNameValue(`Group No ${chatId}`);

    // reset values on unmount
    return () => {
      setGroupName("");
      setGroupNameValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  return (
    <div className="grid grid-cols-3 h-[100vh]">
      <div className="">
        <GroupList myGroups={sampleChats} />
      </div>
      <div className="col-span-2">
        <button onClick={handleMobile}>
          <FaHamburger />
        </button>
        <button
          onClick={navigateBack}
          className="rounded-full w-8 h-8 bg-black text-center flex items-center justify-center"
        >
          <FaBackward className="text-white text-center" />
        </button>
        {groupName && <GroupName />}
        <h3>Members</h3>
        <Drawer
          className="sm:hidden xs:block"
          open={isMobileMenueOpen}
          setOpen={handleMobile}
          onClose={handleMobileClose}
        />
      </div>
    </div>
  );
};

export default Groups;

const GroupList = ({ myGroups = [], chatId }) => {
  return myGroups.length > 0 ? (
    myGroups.map((group) => <GroupListItem group={group} chatId={chatId} />)
  ) : (
    <h1>No Groups found</h1>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <div className="flex">
        <AvatarCard avatar={avatar} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
});

### APIs
- login
- signup
- search 
- send request
- socket notification to send request notifi
- accept request api
- get friends
- logout

- send attachments
- create group
- get my chats (chat list)
- get messages of one chat
- get my groups
- get chat details(mult people)
- rename chat
- delete chat
- add members
- remove members
- leave groups


- login admin 
- statstich data
- chat data




- Error handler
- Unique trycatch 
- custom Error class
- auth middleware (use cookie parser) -->implement getprofile
- logout api

- search user api  (using querry param name)

- create groupchat/ group  API
   - 3 or more users
   - emmitEvent in features(req, event, users, data) for sending notification  -->call 2 events
- create seeader for users for / also for chats
   - remember process.exit(1)


- getMyChats API (use populate ans search via if i am present in members)
   - transform chat before returning (pick all users avatar and send as array avatar) OR just add avatar in model ad access it
   - add helper to get other member
   - in members array we need only other memberd id (reduce)


## TODO

- getmygroups API (creator mai hu )
   - populate kr do

- addMembers  PUT API
   - with chatid , members ( update members of this chat id)
   - find chat with this chatid
      - if not groupchat then return 
      - if not chat then return
      - if current user is not creator then return
   - find all the users of this members
   - check for unique members only
   - add new mwmbers to old list
   - set limit to 100
   - emmmit(req, alert,chat.members, "Message")
   - emmmit(req, refetch,chat.members, )
   - save model

- Removemember API  DELETE
   - userid, chatid
   - regular chat checks
   - min member should be 3
   - filter chat members
   - save chat
   - emmit()
   - emmit()

- leavegroup DELETE API   /leave/:id
   -manage a conditiion jab creator hi chat leave kr rah ai -> new creator bana do 

- Send Attachment
   - multer
- Get Messages
- Get Chat Details , rename, delete

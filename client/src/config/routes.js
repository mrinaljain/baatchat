import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat.js";
import Groups from "../pages/Groups.js";
import Login from "../pages/Login.js";
import ProtectRoute from "../components/auth/ProtectRoute.jsx";
import NotFound from "../pages/NotFound.js";

const isUser = true;
const router = createBrowserRouter([
  {
    element: <ProtectRoute isUser={isUser} />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/chat/:chatId", element: <Chat /> },
      { path: "/groups", element: <Groups /> },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectRoute isUser={!isUser} redirect="/">
        <Login />
      </ProtectRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

// TODO: (@mrinaljan) : LAzy loading of components

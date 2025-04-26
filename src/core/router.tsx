import { Login, Register } from "@/pages";
import { Chats } from "@/pages/chats";
import { useAppSelector } from "@/store";
import { isAuth } from "@/store/slices";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

interface Props {}

export const Router: React.FC<Props> = () => {
  const auth = useAppSelector(isAuth);

  const router = createBrowserRouter([
    { path: "/a/l", element: <Login /> },
    { path: "/a/r", element: <Register /> },
    { path: "/a/s", element: <></> },
    { path: "/c", element: auth ? <Chats /> : <Login /> },
    { path: "*", element: <>404</> },
  ]);

  return <RouterProvider router={router} />;
};

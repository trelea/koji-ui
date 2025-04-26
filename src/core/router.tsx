import { Chats, Login, Otp, Register, Setup } from "@/pages";
import { useAppSelector } from "@/store";
import { isAuth } from "@/store/slices";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

interface Props {}

export const Router: React.FC<Props> = ({}) => {
  const auth = useAppSelector(isAuth);

  /**
   * I was just thinking so:
   *
   * /a/l   login
   * /a/r   register
   * /a/o   otp validation
   * /a/s   setup
   */

  const router = createBrowserRouter([
    /**
     * auth + setup core routes
     */
    { path: "/a/l", element: <Login /> },
    { path: "/a/r", element: <Register /> },
    { path: "/a/o", element: <Otp /> },
    { path: "/a/s", element: <Setup /> },

    /**
     * Rest routes
     */
    { path: "/c", element: auth ? <Chats /> : <Login /> },
    { path: "*", element: <>404</> },
  ]);

  return <RouterProvider router={router} />;
};

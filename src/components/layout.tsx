import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <main className="h-screen w-screen">{children}</main>;
};

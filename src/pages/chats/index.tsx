import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/services";
import { useAppDispatch } from "@/store";
import { deauthUser } from "@/store/slices";
import { AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router";

interface Props {}

export const Chats: React.FC<Props> = ({}) => {
  const data = React.useState<string[]>([]);
  const dispatch = useAppDispatch();
  const redirect = useNavigate();
  React.useEffect(() => {
    // console.log("Into Chats Page Component");
    axiosInstance
      .get<unknown, AxiosResponse<{ users: string[] }>>("/users")
      .then((res) => data[1](res.data.users));
  }, []);
  return (
    <main>
      <h1>Private Chats Page</h1>
      {data[0].map((name) => (
        <li key={name}>{name}</li>
      ))}
      <Button
        onClick={() => {
          axiosInstance
            .post("/auth/logout")
            .then(() => dispatch(deauthUser()))
            .finally(() => redirect("/a/l", { replace: true }));
        }}
      >
        Logout
      </Button>
    </main>
  );
};

import React from "react";
import LoginButton from "./LoginButton";
import UserIndicator from "./UserIndicator";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";

export const NavbarUserIndicator: React.FunctionComponent = () => {
  const userStore = useStore(UserStore);

  if (userStore.state.loggedIn) {
    return <UserIndicator />;
  } else {
    return <LoginButton />;
  }
};


import React from "react";
import AccountBoxTwoTone from "@material-ui/icons/AccountBoxTwoTone";
import AccountCircleTwoTone from "@material-ui/icons/AccountCircleTwoTone";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import Avatar from "@material-ui/core/Avatar/Avatar";

export const TypeIcon = (props) => {
  if (props.droppable) {
    return <Avatar alt="image" src={props.avatar} />;
  }

  switch (props.avatar) {
    // case "PMO":
    //   return <AccountBoxTwoTone />;
    // case "LL":
    //   return <AccountCircleTwoTone />;
    // case "Member":
    //   return <AccountCircleOutlined />;
    default:
      return <Avatar alt="image" src={props.avatar} />;
  }
};

import React from "react";
import NavBar from "../../../../components/navigation/NavBar";
import ImageComp from "../../../../components/Image";
import ChatCard from "../../../../components/messages/ChatCard";
import ActionBtn from "../../../../components/ActionBtn";
import Message from "./Message";

const Messages = () => {
  return (
    // <section className="fixed">
    <NavBar>
      <Message />
    </NavBar>
    // </section>
  );
};

export default Messages;

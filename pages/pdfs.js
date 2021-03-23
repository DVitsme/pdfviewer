import React, { useContext } from "react";
import ModalContainer from "../components/Modals/Index";
import { UserContext } from "../lib/context";

const pdfs = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <ModalContainer />
    </div>
  );
};

export default pdfs;

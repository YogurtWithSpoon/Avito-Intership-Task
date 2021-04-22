import React from "react";
import ReactDom from "react-dom";
import { BackDrop } from "./Modal.styled";
import { ModalOpen } from "./globalStyles";
import { useHistory } from "react-router";

interface ModalProps {
  children: React.ReactNode | React.ReactChild;
}

function Modal({ children }:ModalProps):React.ReactPortal {
  const history = useHistory()
  return ReactDom.createPortal(
    <>
      <ModalOpen />
      {children}
      <BackDrop onClick={() => history.push('/')} />
    </>,
    document.getElementById("root-modal")!
  );
}

export default Modal;

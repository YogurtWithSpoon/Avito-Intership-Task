import React from "react";
import ReactDom from "react-dom";
import { BackDrop } from "./Modal.styled";
import { ModalOpen } from "./globalStyles";

function Modal({ children, closeFunction }) {
  return ReactDom.createPortal(
    <>
      <ModalOpen />
      {children}
      <BackDrop onClick={closeFunction} />
    </>,
    document.getElementById("root-modal")
  );
}

export default Modal;

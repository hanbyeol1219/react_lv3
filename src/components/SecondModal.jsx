import React from "react";
import { useState } from "react";
import S from "../SecondModalStyle";

const SecondModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={HandleOpenModal}>open modal</button>
      {isOpen ? (
        <div id="modal-container">
          <S.ModalBackDrop onClick={HandleOpenModal}>
            <S.ModalContents role="dialog">
              <p>
                닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.
              </p>
              <S.Modal_BtnWrap>
                <S.Modal_Btn>X</S.Modal_Btn>
              </S.Modal_BtnWrap>
            </S.ModalContents>
          </S.ModalBackDrop>
        </div>
      ) : null}
    </>
  );
};

export default SecondModal;

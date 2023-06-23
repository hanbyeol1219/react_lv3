import React from "react";
import { useState } from "react";
import S from "../FirstModalStyle";

const FirstModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={HandleOpenModal}>open modal</button>
      {isOpen ? (
        <div id="modal-container">
          <S.ModalBackDrop onClick={(e) => e.stopPropagation()}>
            <S.ModalContents role="dialog">
              <p>
                닫기와 확인 버튼 2개가 있고, 외부영역을 눌러도 모달이 닫히지
                않아요.
              </p>
              <S.Modal_BtnWrap>
                <S.Modal_Btn
                  backgroundColor="rgb(250, 177, 160)"
                  color="#d63031"
                  onClick={HandleOpenModal}
                >
                  닫기
                </S.Modal_Btn>
                <S.Modal_Btn
                  backgroundColor="rgb(85, 239, 196)"
                  color="#000000"
                >
                  확인
                </S.Modal_Btn>
              </S.Modal_BtnWrap>
            </S.ModalContents>
          </S.ModalBackDrop>
        </div>
      ) : null}
    </>
  );
};

export default FirstModal;

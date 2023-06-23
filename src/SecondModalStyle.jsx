import { styled } from "styled-components";

const S = {
  ModalBackDrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
  `,

  ModalContents: styled.div`
    width: 400px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  Modal_BtnWrap: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  `,

  Modal_Btn: styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
  `,
};

export default S;

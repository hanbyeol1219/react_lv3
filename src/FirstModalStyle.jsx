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
    width: 500px;
    height: 300px;
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
    width: 100px;
    height: 40px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    cursor: pointer;
    border: none;
    border-radius: 8px;
  `,
};

export default S;

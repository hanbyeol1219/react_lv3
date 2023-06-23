import GlobalStyleReset from "./GlobalStyleReset";
import React from "react";
import { useState } from "react";
import FirstModal from "./components/FirstModal";
import SecondModal from "./components/SecondModal";
import { styled } from "styled-components";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const PrimaryBtn = () => {
    alert("버튼을 만들어보세요.");
  };

  const NegativeBtn = () => {
    prompt("어렵나요?");
  };

  const HandleNameOnchange = (event) => {
    setName(event.target.value);
  };

  const HandleNPriceOnchange = (event) => {
    let value = event.target.value;
    const numCheck = /^[0-9,]/.test(value);

    if (!numCheck && value) return;

    if (numCheck) {
      const numValue = value.replaceAll(",", "");
      value = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    setPrice(value);
  };

  const InputSaveBtn = () => {
    if (name === "" && price === 0) {
      alert("이름과 가격 모두 입력해주세요.");
    } else if (name === "") {
      alert("이름을 입력해주세요.");
    } else if (price === 0) {
      alert("가격을 설정해주세요.");
    } else {
      alert(`{ name : ${name}, price : ${price} }`);
    }
  };

  // styled-components
  const S = {
    AllTitle: styled.h2`
      font-weight: 900;
      font-size: 30px;
      margin: 20px 0;
    `,

    SelectConatiner: styled.div`
      border: 2px solid gray;
      height: 150px;
    `,

    SelectBox: styled.select``,
  };

  return (
    <>
      <GlobalStyleReset />
      <div id="btn-container">
        <S.AllTitle>Button</S.AllTitle>
        <div id="large-primary-btn-container">
          <button
            onClick={(event) => {
              event.preventDefault();
              PrimaryBtn();
            }}
          >
            Large Primary Button &#62;
          </button>
          <button>Mediun</button>
          <button>Small</button>
        </div>
        <div id="large-negative-btn-container">
          <button
            onClick={(event) => {
              event.preventDefault();
              NegativeBtn();
            }}
          >
            Large Negative Button
          </button>
          <button>Mediun</button>
          <button>Small</button>
        </div>
      </div>

      <div id="input-container">
        <S.AllTitle>Input</S.AllTitle>
        <div id="large-primary-btn-container">
          <form>
            <span>이름</span>
            <input type="text" value={name} onChange={HandleNameOnchange} />
            <span>가격</span>
            <input type="text" value={price} onChange={HandleNPriceOnchange} />
            <button
              onClick={(event) => {
                event.preventDefault();
                InputSaveBtn();
              }}
            >
              저장
            </button>
          </form>
        </div>
      </div>

      <div id="modal-container">
        <S.AllTitle>Modal</S.AllTitle>
        <FirstModal />
        <SecondModal />
      </div>

      <S.SelectConatiner overflow="auto">
        <S.AllTitle>Select</S.AllTitle>
        <select id="isNotHidden">
          <option>리액트</option>
          <option>자바</option>
          <option>스프링</option>
          <option>리액트네이티브</option>
        </select>
        <select id="isHidden">
          <option>리액트</option>
          <option>자바</option>
          <option>스프링</option>
          <option>리액트네이티브</option>
        </select>
      </S.SelectConatiner>
    </>
  );
}

export default App;

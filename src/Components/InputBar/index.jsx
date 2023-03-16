import React, { useState } from "react";
import styled from "styled-components";

import {
  Camera,
  Microphone,
  Send,
  Smile,
} from "@styled-icons/boxicons-regular";

const InputBar = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  return (
    <TypeContainer>
      <button>
        <Smile />
      </button>
      <textarea placeholder="Введите текст сообщения" onChange={handleChange} />
      <button>
        <Camera />
      </button>
      {value ? (
        <button>
          <Send />
        </button>
      ) : (
        <button>
          <Microphone />
        </button>
      )}
    </TypeContainer>
  );
};

const TypeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;

  & button {
    width: 25px;
    height: 25px;
    background-color: #fff;
    opacity: 0.5;
    transition: opacity 0.5s ease;
    &:hover{
      opacity: 1;
    }
  }
  & textarea {
    font-size: 16px;
    flex: 1;
    resize: none;
    padding: 8px 5px 5px 5px;
    height: 35px;
    border: 1px solid #89939c;
    border-radius: 3px;
  }
`;

export default InputBar;

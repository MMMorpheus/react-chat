import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular";

export const StyledAside = styled.aside`
  width: 420px;
  height: 100%;
  padding: 20px 10px;
  border-right: 1px solid #f7f8f9;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  height: 100px;
  & > div {
    padding-inline: 10px;
    display: flex;
    gap: 10px;
  }
  & h3 {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
  }
  & button {
    margin-left: auto;
    opacity: 0.8;
    transition: opacity 0.5s ease;
    &:hover{
      opacity: 1;
    }
  }
`;

export const SearchField = styled.input`
  width: 95%;
  height: 35px;
  border: none;
  display: block;
  margin: 25px auto 0 auto;
  border-radius: 4px;
  text-indent: 30px;
  font-size: 18px;
  background-color: #f7f8f9;
  &::placeholder {
    font-size: 15px;
  }
`;

export const SearchIcon = styled(SearchAlt2)`
  position: absolute;
  left: 3.5%;
  top: 20%;
  width: 22px;
  height: 22px;
  z-index: 2;
`;

import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular";

export const StyledAside = styled.aside`
  padding: 20px 10px;
  flex: 0 1 30%;
  min-height: 100%;
  background-color: #ECF0F1;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  padding-inline: 10px;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;

export const Edit = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  margin-left: auto;
`;

export const Label = styled.label`
  position: relative;
`;

export const SearchField = styled.input`
  width: 95%;
  height: 35px;
  border: none;
  outline: none;
  display: block;
  margin: 25px auto 0 auto;
  border-radius: 4px;
  text-indent: 30px;
  font-size: 18px;
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
color: #475767;
z-index: 2;
`

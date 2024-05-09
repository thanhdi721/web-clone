import styled from "styled-components";

export const WrapperButtonHeader = styled.div`
  background: transparent;
  position: relative !important;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #003da5;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #003da5;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  width: 120px;

  span {
    margin: 10px;
  }

  &::before {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    border: 1px solid #003da5;
  }
`;
export const WrapperLiHeader = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #003da5;
`;
export const WrapperSearchContainer = styled.div`
  position: relative !important;
  width: 100px;
`;
export const WrapperSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border-radius: 25px;
  border: 1px solid #003da5;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #333;
  }
`;
export const WrapperSearchIcon = styled.span`
  position: absolute !important;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #777;
`;

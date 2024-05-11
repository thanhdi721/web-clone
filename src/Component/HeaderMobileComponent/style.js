import styled from "styled-components";

export const WrapperButtonHeaderMB = styled.div`
  background: transparent;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #003da5;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #3ea2f3;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  width: 90px;

  span {
    margin: 2px;
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
    border: 1px solid #3ea2f3;
  }
`;

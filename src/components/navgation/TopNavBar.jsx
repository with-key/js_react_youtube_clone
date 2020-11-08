import React, { useRef } from "react";
import LogoImg from "./Logo";
import styled from "styled-components";

const TopNavBar = ({ onSearch }) => {
  const inputRef = useRef();

  const onHandleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    onHandleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onHandleSearch();
    }
  };
  return (
    <NavBar>
      <LogoImg />
      <div>
        <input
          ref={inputRef}
          className="serach-input"
          type="text"
          placeholder="오늘은 뭐먹지.."
          onKeyPress={onKeyPress}
        />
        <button className="search-btn" onClick={onClick}>
          검색
        </button>
      </div>
    </NavBar>
  );
};

export default TopNavBar;

const NavBar = styled.nav`
  z-index: 999;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;

  .serach-input {
    transition: width 200ms ease-in-out;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #ddd;
    outline: none;
    padding-left: 20px;
    margin-right: 10px;
    :focus {
      border: 1px solid #ffc905;
      width: 300px;
    }
  }

  .search-btn {
    width: 80px;
    height: 45px;
    border-radius: 20px;
    border: none;
    background-color: #ffc905;
    font-size: 16px;
    font-weight: 600;
  }
`;

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import styled from "styled-components";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "../utils/Button";
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Button removeMarginStyle>
          <AccountCircleOutlined />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import styled from "styled-components";
export const Button = styled.button`
  padding: 5px 15px;
  background: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  color: #3ea6ff;
  margin-top: ${(props) => (props.removeMarginStyle ? "0px" : "10px")};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

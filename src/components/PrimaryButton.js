import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  margin-top: 30px;
  max-width: 155px;
  border-radius: 9999px;
  border: solid 0px rgba(0, 0, 0, 0);
  font-size: 0.9375em;
  font-weight: 500;
  padding: 14px 31px 14px;
  background-color: #040e28;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f46363;
  }
`;

export default PrimaryButton;

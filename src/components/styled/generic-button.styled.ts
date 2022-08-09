import { Button } from "@material-ui/core";
import styled from "styled-components";

export const GenericButton = styled(Button)`
  color: #000000 !important;
  border-color:  #00000 !important;
  background-color: #ffffff !important;
  border: 2px  solid !important;
  height: 40px;
  font-size: 1rem !important;
  min-width: 150px;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  width: 150px;
  margin-left: 15px !important;

  &:disabled {
    background: #d7dade !important;
    border-color: #a7a9ab !important;
  }
`;

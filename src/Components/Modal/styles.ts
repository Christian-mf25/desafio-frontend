import { Form } from "react-bootstrap";
import styled from "styled-components";

export const CheckBox = styled(Form.Check)`
  .form-check-input {
    border: solid 2px var(--color-primary);
    cursor: pointer;
  }
  .form-check-input:checked {
    background-color: var(--color-primary);
  }
`;
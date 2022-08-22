import styled, { createGlobalStyle } from "styled-components";
import { Modal } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`

	body{ 
		background: #fafafa;
	}

	html, body, main, div, header, h1, h2, h3, h4, h5, h6, p, a, button, form, input, label, td, table, tbody, tr, thead{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	} 
`;


export const ModalForm = styled(Modal)`
  font-family: "Open Sans", sans-serif;
  color: #646464;

  label {
    font-weight: 400;
  }

  h4 {
    font-weight: 500;
  }

  .modal-backdrop.show {
    height: 100%;
    width: 100%;
  }

  .modal-content {
    margin: 0 auto;
    width: 85%;
    max-width: 298px;
  }
`;

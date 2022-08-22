import { Table } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;

  overflow: auto;
  overflow-y: hidden;
  margin: 20px auto;
  white-space: nowrap;

  background: #cccccc61;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #45cdcc75;
    border-radius: 25px;
  }
`;

export const UsersTable = styled(Table)`
  background-color: #fff;

  color: #8a8a8a;
  font-family: "Open Sans", sans-serif;

  margin: 0 auto;
  overflow: hidden;
  -webkit-border-radius: 15px;

  th {
    font-weight: 600;
		padding: 10px 15px;
  }

  td {
		margin-left: 20px;
    font-weight: 500;
    font-size: 0.9rem;
		padding: 10px 15px;
  }

  .write {
    color: #3e76ad;
    font-size: 1.2rem;
    margin: 0 5px 0 5px;
		cursor: pointer;
  }

  .delete {
    color: #e3807b;
    font-size: 1.4rem;
		cursor: pointer;
  }

  .username {
    background: #dbf7ff;
    width: 90px;
    border-radius: 5px;

    text-align: center;
    color: #6c9dc7;
    font-size: 0.8rem;
    font-weight: 600;

		overflow: hidden;
  	text-overflow: clip; 
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 1.4rem;
      color: #3a73ab;
      margin-left: 0;
			cursor: pointer;
    }
  }

  tbody > tr:nth-child(odd) {
    border-top: solid 2px #f7f7f7;
    background-color: #f1f1f1;
  }
`;

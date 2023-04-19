import styled from "styled-components"

export const QuantityInputContainer = styled.div`
  padding: 0.5rem;
  gap: 4px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  button {
    background: transparent;
    border: 0;
    padding: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
  input {
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    background-color: transparent;
    border-radius: 0;
    text-align: center;
  }
`

import styled, { css } from "styled-components"

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${(props) => props.theme.error};
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const PaymentInputBox = styled.div`
  flex: 1;
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    background: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme.purple};
    &:hover {
      background: ${(props) => props.theme["purple-light"]};
    }
  }
`

export const ContentContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme["base-button"]};
  font-size: 0.75rem;
  text-transform: uppercase;
  flex: 1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  transition: all ease 0.3s;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${(props) => props.theme["base-button"]};

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`

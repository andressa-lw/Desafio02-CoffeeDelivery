import styled, { css } from "styled-components"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  > p {
    color: ${(props) => props.theme.error};
    font-size: 0.875rem;
  }
`

interface InputContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.3s;
  overflow: hidden;

  &:focus-within {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme.error};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme["base-label"]};
`

import styled from "styled-components"

export const CartOrderContainer = styled.div``

export const CartCardCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  column-gap: 2.5rem;
  .item {
    display: flex;
    align-items: center;
    column-gap: 1.25rem;
    h3 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      font-family: "Roboto", sans-serif;
    }
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
  }
`
export const ButtonsActionsContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-top: 0.5rem;
  .remove {
    padding: 0.5rem;
    background: ${(props) => props.theme["base-button"]};
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: all ease 0.3s;
    cursor: pointer;
    user-select: none;
    border: 0;
    svg {
      color: ${(props) => props.theme.purple};
    }
    &:hover {
      background: ${(props) => props.theme["base-hover"]};
    }
  }
`
export const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }
    small {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }
    &.total {
      p,
      small {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
      }
    }
  }
  button {
    padding: 0.75rem 0.5rem;
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    border: 0;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    margin-top: 0.75rem;
    transition: all ease 0.3s;
    cursor: pointer;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }
`

import styled from "styled-components"

export const SuccessContainer = styled.section`
  padding: 5rem 0;
  h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 1.25rem;
  }
`

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  ul {
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    list-style: none;
    margin: 0;
    max-width: 32.875rem;
    width: 100%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      inset: -2px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
      background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
    li {
      display: flex;
      align-items: center;
      column-gap: 0.75rem;
      .icon {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.white};
      }
      span:nth-child(2) {
        flex: 1;
      }
      &:last-child {
        .icon {
          background-color: ${(props) => props.theme["yellow-dark"]};
        }
      }
      &:nth-child(2) {
        .icon {
          background-color: ${(props) => props.theme.yellow};
        }
      }
      &:first-child {
        .icon {
          background-color: ${(props) => props.theme.purple};
        }
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`

import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 0 1.5rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 120px;
    height: 120px;
    margin: -1.25rem 0 0.75rem 0;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    .tag {
      background: ${(props) => props.theme["yellow-light"]};
      border-radius: 100px;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      text-transform: uppercase;
      color: ${(props) => props.theme["yellow-dark"]};
      padding: 0.25rem 0.5rem;
      margin-bottom: 1rem;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    .price {
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      font-family: "Baloo 2", cursive;
      margin-right: 1.25rem;
      small {
        font-weight: 400;
        font-size: 0.875rem;
        font-family: "Roboto", sans-serif;
      }
    }
    .cart {
      background: ${(props) => props.theme["purple-dark"]};
      border-radius: 0.375rem;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.375rem;
      height: 2.375rem;
      color: ${(props) => props.theme["base-card"]};
      margin-left: 0.5rem;
      cursor: pointer;
      transition: all ease 0.3s;
      &:hover {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }
`

import styled from "styled-components"

export const CheckoutContainer = styled.form`
  .container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 2rem;
    h2 {
      font-size: 1.125rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
      margin-bottom: 1rem;
    }

    .box {
      padding: 2.5rem;
      background: ${(props) => props.theme["base-card"]};
      border-radius: 0.375rem;
      & + .box {
        margin-top: 0.75rem;
      }
      .top {
        display: flex;
        align-items: flex-start;
        column-gap: 8px;
        strong {
          font-weight: 400;
          line-height: 130%;
          color: ${(props) => props.theme["base-subtitle"]};
        }
        p {
          font-size: 0.875rem;
          line-height: 130%;
          margin-top: 0.125rem;
        }
      }
    }
    .address {
      svg {
        fill: ${(props) => props.theme["yellow-dark"]};
      }
    }
    .payment {
      svg {
        fill: ${(props) => props.theme.purple};
      }
    }
    .cartTotal {
      border-radius: 6px 44px 6px 44px;
      padding: 2.5rem 2rem;
    }
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`

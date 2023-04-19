import styled from "styled-components"

export const BannerContainer = styled.div`
  background: url("src/assets/bg-banner.jpg") no-repeat center;
  background-size: cover;
  padding: 5.75rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 3.5rem;
    .texts {
      h1 {
        color: ${(props) => props.theme["base-title"]};
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
      }
      p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        margin-top: 1rem;
      }
      ul {
        column-count: 2;
        gap: 0;
        list-style: none;
        padding: 0;
        margin: 4.125rem 0 0 0;
        li {
          display: flex;
          align-items: center;
          column-gap: 0.75rem;
          margin-bottom: 1.25rem;
          .icon {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${(props) => props.theme.white};
          }
          &:first-child {
            .icon {
              background-color: ${(props) => props.theme["yellow-dark"]};
            }
          }
          &:nth-child(3) {
            .icon {
              background-color: ${(props) => props.theme["base-text"]};
            }
          }
          &:nth-child(2) {
            .icon {
              background-color: ${(props) => props.theme.yellow};
            }
          }
          &:last-child {
            .icon {
              background-color: ${(props) => props.theme.purple};
            }
          }
        }
      }
    }
    img {
      max-width: 476px;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    padding: 3rem 0;
    .container {
      flex-direction: column;
      .texts {
        ul {
          column-count: 1;
        }
      }
    }
  }
`
export const CoffeeContainer = styled.section`
  padding-bottom: 6rem;
  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }

  .boxes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
  @media (max-width: 1080px) {
    .boxes {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 980px) {
    .boxes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 650px) {
    .boxes {
      grid-template-columns: 1fr;
    }
  }
`

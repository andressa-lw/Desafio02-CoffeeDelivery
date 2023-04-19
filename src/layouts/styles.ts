import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: ${(props) => props.theme.background};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 85px;
      height: auto;
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      button,
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem;
        border-radius: 0.375rem;
        border: 0;
      }
      button {
        background-color: ${(props) => props.theme["purple-light"]};
        color: ${(props) => props.theme["purple-dark"]};
        pointer-events: none;
      }
      a {
        background-color: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};
        cursor: pointer;
        transition: all ease 0.3s;
        position: relative;
        &:hover {
          background-color: ${(props) => props.theme["yellow-dark"]};
          color: ${(props) => props.theme["yellow-light"]};
        }

        span {
          position: absolute;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          top: calc(-1.25rem / 2);
          right: calc(-1.25rem / 2);
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme["yellow-dark"]};
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`

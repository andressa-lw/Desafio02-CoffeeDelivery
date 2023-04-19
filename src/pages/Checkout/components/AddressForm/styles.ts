import styled from "styled-components"

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  width: 100%;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  margin-top: 2rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    .cep,
    .street,
    .complement {
      grid-column: auto;
    }
  }
`

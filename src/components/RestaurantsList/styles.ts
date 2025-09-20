import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

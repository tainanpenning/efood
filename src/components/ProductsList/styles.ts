import styled from 'styled-components'

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
  position: relative;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const Alert = styled.p`
  display: flex;
  justify-content: center;
  margin: 24px auto;
  font-size: 24px;
  font-weight: bold;
`

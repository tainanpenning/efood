import styled from 'styled-components'
import { Colors, Container } from '../../styles'

export const PresentationContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
`

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.4);

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 156px;
    height: 280px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${Colors.white};

  &:first-child {
    font-weight: 100;
    margin-top: 14px;
  }
`

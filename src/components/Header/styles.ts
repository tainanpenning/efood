import styled from 'styled-components'
import { Colors, Container } from '../../styles'

export const HeaderContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 170px;
  display: flex;

  ${Container} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    position: absolute;
    inset: 0;
    width: 126px;
    margin: 56px auto;
  }
`

export const Cart = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${Colors.lighten_red};
  }
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${Colors.light_red};

  &:hover {
    color: ${Colors.lighten_red};
  }
`

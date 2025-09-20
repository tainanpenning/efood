import styled from 'styled-components'
import { Colors } from '../../styles'

export const OrderContainer = styled.div`
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  padding: 32px 8px;
  width: 360px;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0;
`

export const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
  border: none;
  width: 100%;
  margin-top: 24px;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light_beige};
  }
`

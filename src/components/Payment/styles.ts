import styled from 'styled-components'
import { Colors } from '../../styles'

export const PaymentContainer = styled.div`
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  padding: 32px 8px;
  width: 360px;
  height: 100%;
`

export const PaymentRow = styled.div`
  display: flex;
  gap: 32px;
`

export const Cvv = styled.div`
  width: 88px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Label = styled.p`
  display: block;
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.dark_gray};
  background-color: ${Colors.beige};
  border: none;
`

export const ButtonRow = styled.div`
  margin-top: 24px;
`

export const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
  border: none;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light_beige};
  }
`

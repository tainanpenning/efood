import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProductsContainer = styled.div`
  padding: 8px;
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.image`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
`

export const ProductsAbout = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0;
`
export const ButtonRow = styled.div`
  display: flex;
`

export const Button = styled.button`
  padding: 4px 0;
  font-size: 14px;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
  border: none;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light_beige};
  }
`

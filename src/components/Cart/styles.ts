import styled from 'styled-components'
import { Colors } from '../../styles'

export const CartContainer = styled.div`
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  width: 360px;
  height: 100%;
  padding: 32px 8px;
`

export const CartContent = styled.div`
  overflow-y: scroll;
  height: auto;
  max-height: 720px;
  margin-top: 8px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${Colors.light_red};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.beige};
    border-radius: 6px;
    border: 2px solid ${Colors.light_red};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.light_beige};
  }
`

export const CartItem = styled.div`
  position: relative;
  display: flex;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
  padding: 8px;
  margin-bottom: 16px;
  margin-right: 6px;
`

export const CartAbout = styled.div`
  margin-left: 8px;
`

export const Icon = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export const CartEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
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

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

export const Price = styled.p`
  font-size: 14px;
  line-height: 22px;
`

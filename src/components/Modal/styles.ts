import styled from 'styled-components'
import { Colors } from '../../styles'

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
`

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 32px;
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  position: relative;
`

export const Icon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width: 100%;
  height: 280px;
`

export const ModalContent = styled.div`
  margin-left: 24px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light_beige};
  }
`

export const Counter = styled.span`
  margin-left: 8px;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Colors.beige};
  color: ${Colors.light_red};
`

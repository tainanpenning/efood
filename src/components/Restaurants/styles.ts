import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardBanner = styled.div`
  display: flex;
  position: relative;
`

export const Image = styled.image`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 220px;
`

export const CardAbout = styled.div`
  background-color: ${Colors.white};
  padding: 8px;
  border: 1px solid ${Colors.light_red};
  border-top: none;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Tag = styled.p`
  margin-left: 8px;
  font-size: 12px;
  padding: 4px 6px;
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  border: none;
`

export const Rating = styled.div`
  display: flex;
  gap: 8px;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled.button`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  background-color: ${Colors.light_red};
  color: ${Colors.beige};
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.lighten_red};
  }
`

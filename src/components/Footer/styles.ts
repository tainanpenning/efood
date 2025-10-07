import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.beige};
  padding: 40px 0;
  position: absolute;
  bottom: 1;
  left: 0;
  width: 100%;
`

export const Logo = styled.img`
  height: 58px;
  width: 126px;
`

export const Links = styled.div`
  display: inline-block;
  padding-top: 32px;
  padding-bottom: 80px;
`

export const Link = styled.a`
  margin: 4px;

  img {
    size: 24px;
  }
`

export const Disclaimer = styled.p`
  font-size: 10px;
  text-align: center;
`

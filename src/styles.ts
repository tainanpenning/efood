import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  light_red: '#E66767',
  lighten_red: '#e67567',
  darker_white: '#FFF8F2',
  white: '#FFFFFF',
  beige: '#FFEBD9',
  light_beige: '#fff0d9',
  black: '#00000080',
  gold: '#FFB930',
  dark_gray: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;

    &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${Colors.beige};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.light_red};
    border-radius: 6px;
    border: 2px solid ${Colors.beige};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.light_beige};
  }
  }

  body{
    background-color: ${Colors.darker_white};
    color: ${Colors.light_red};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
`

export const Loading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.light_red};
  padding: 32px;
  text-align: center;
`

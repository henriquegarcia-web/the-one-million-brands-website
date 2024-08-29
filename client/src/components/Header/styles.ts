import styled from 'styled-components'
import { headerHeight } from '@/utils/styles/globals'

export const Header = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  height: ${headerHeight};
  padding: 0 20px;

  background-color: rgba(0, 0, 0, 0.3);
`

export const HeaderLogo = styled.div`
  display: flex;
`

export const HeaderNavigation = styled.div`
  display: flex;
  margin-left: auto;
`

export const HeaderMenus = styled.div`
  display: flex;

  button {
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 10px 18px;
    border-radius: 5px;
    cursor: pointer;

    font-size: 15px;
    line-height: 15px;
    font-weight: 500;

    background: orangered;
    color: white;
  }
`

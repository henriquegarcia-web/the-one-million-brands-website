import * as S from './styles'

import { AppModeType } from '@/@types/globals'

interface IHeader {
  appMode: AppModeType
  handleStartBuyMode: () => void
}

const Header = ({ appMode, handleStartBuyMode }: IHeader) => {
  return (
    <S.Header>
      <S.HeaderLogo>AD PIXEL</S.HeaderLogo>
      <S.HeaderNavigation>teste</S.HeaderNavigation>
      <S.HeaderMenus>
        {appMode === 'buying' && 'Você está comprando pixels'}
        <button onClick={handleStartBuyMode}>Comprar Pixels</button>
      </S.HeaderMenus>
    </S.Header>
  )
}

export default Header

import * as S from './styles'

interface IButton {
  label: string
  onClick?: () => void
}

const Button = ({ label, onClick }: IButton) => {
  return <S.Button onClick={onClick && onClick}>{label}</S.Button>
}

export default Button

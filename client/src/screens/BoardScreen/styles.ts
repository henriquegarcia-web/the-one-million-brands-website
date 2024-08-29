import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

export const BoardScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  background-image: url('/bg_blueprint_gray.png');
  background-position: center;
  background-size: cover;
`

export const BoardScreenWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  /* border: 2px solid red; */
`

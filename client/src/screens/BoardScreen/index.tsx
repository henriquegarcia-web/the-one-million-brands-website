import { useState, useRef, ChangeEvent } from 'react'

import * as S from './styles'

import { Header } from '@/components'
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef
} from 'react-zoom-pan-pinch'

import { AppModeType } from '@/@types/globals'

interface IBoardScreen {}

const BoardScreen = ({}: IBoardScreen) => {
  const transformWrapperRef = useRef<ReactZoomPanPinchContentRef>(null)

  const [appMode, setAppMode] = useState<AppModeType>('viewing')

  const handleStartBuyMode = () => {
    setAppMode('buying')
  }

  return (
    <S.BoardScreen>
      <Header appMode={appMode} handleStartBuyMode={handleStartBuyMode} />
      <S.BoardScreenWrapper>
        {appMode === 'buying' ? (
          <></>
        ) : (
          // <CanvasEditor
          //   blocks={blocks}
          //   setBlocks={setBlocks}
          //   onSelectionComplete={handleSelectionComplete}
          //   handleSelectionReset={handleSelectionReset}
          // />
          <TransformWrapper
            initialPositionX={0}
            initialPositionY={160}
            minScale={1}
            maxScale={50}
            initialScale={1}
            wheel={{ step: 0.4 }}
            limitToBounds={false}
            ref={transformWrapperRef}
            smooth={true}
            onPanningStart={(e) => {
              // Permite o movimento do board apenas com o botão direito do mouse
              // if (e.button !== 2) {
              //   e.stopPropagation()
              // }
            }}
            onPanning={(e) => {
              // Permite o movimento do board apenas com o botão direito do mouse
              // if (e.button !== 2) {
              //   e.stopPropagation()
              // }
            }}
          >
            {({ zoomIn, zoomOut, resetTransform, centerView }) => (
              <TransformComponent
                wrapperStyle={{
                  width: '100vw',
                  height: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}
                contentStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid black'
                }}
              >
                <></>
                {/* <CanvasViewer blocks={blocks} /> */}
              </TransformComponent>
            )}
          </TransformWrapper>
        )}
      </S.BoardScreenWrapper>
    </S.BoardScreen>
  )
}

export default BoardScreen

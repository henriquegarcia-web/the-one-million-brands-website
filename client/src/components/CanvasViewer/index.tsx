import { useState, useRef, Dispatch, SetStateAction } from 'react'

import * as S from './styles'

import { Block } from '@/components'
import { IBlock } from '@/components/Block'

interface ICanvasViewer {
  blocks: IBlock[]
}

const CanvasViewer = ({ blocks }: ICanvasViewer) => {
  return (
    <S.CanvasViewer>
      {blocks.map((block: IBlock) => (
        <div key={block.id}>
          <Block {...block} />
        </div>
      ))}
    </S.CanvasViewer>
  )
}

export default CanvasViewer

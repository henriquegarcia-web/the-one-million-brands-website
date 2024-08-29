import { useState, useRef, Dispatch, SetStateAction } from 'react'

import * as S from './styles'

import { Block } from '@/components'
import { IBlock } from '@/components/Block'

interface ICanvasEditor {
  blocks: IBlock[]
  setBlocks: Dispatch<SetStateAction<IBlock[]>>
  onSelectionComplete: (selectedArea: number[]) => void
  handleSelectionReset: () => void
}

const CanvasEditor = ({
  blocks,
  setBlocks,
  onSelectionComplete,
  handleSelectionReset
}: ICanvasEditor) => {
  const [isSelecting, setIsSelecting] = useState(false)
  const [startBlock, setStartBlock] = useState<number | null>(null)
  const [selectedArea, setSelectedArea] = useState<number[]>([])

  const handleMouseDown = (id: number, e: any) => {
    if (blocks[id].occupied) return

    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => ({ ...block, selected: false }))
    )
    handleSelectionReset()

    setIsSelecting(true)
    setStartBlock(id)
    setSelectedArea([id])
  }

  const handleMouseUp = () => {
    setIsSelecting(false)

    if (selectedArea.length > 0) {
      const isValid = selectedArea.every((id) => !blocks[id].occupied)
      if (isValid) {
        setBlocks((prevBlocks) =>
          prevBlocks.map((block) =>
            selectedArea.includes(block.id)
              ? { ...block, selected: true }
              : block
          )
        )
        onSelectionComplete(selectedArea)
      }
    }

    setSelectedArea([])
  }

  const handleMouseOver = (id: number, e: any) => {
    if (!isSelecting || startBlock === null || blocks[id].occupied) return

    const newArea = calculateArea(startBlock, id)
    if (newArea.every((blockId) => !blocks[blockId].occupied)) {
      setSelectedArea(newArea)

      setBlocks((prevBlocks) =>
        prevBlocks.map((block) =>
          newArea.includes(block.id) ? { ...block, selected: true } : block
        )
      )
    }
  }

  const calculateArea = (start: number, end: number): number[] => {
    const startX = start % 100
    const startY = Math.floor(start / 100)
    const endX = end % 100
    const endY = Math.floor(end / 100)

    const area: number[] = []
    for (let y = Math.min(startY, endY); y <= Math.max(startY, endY); y++) {
      for (let x = Math.min(startX, endX); x <= Math.max(startX, endX); x++) {
        area.push(y * 100 + x)
      }
    }
    return area
  }

  return (
    <S.CanvasEditor
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsSelecting(false)}
    >
      {blocks.map((block) => (
        <div
          key={block.id}
          onMouseDown={(e) => handleMouseDown(block.id, e)}
          onMouseOver={(e) => handleMouseOver(block.id, e)}
        >
          <Block {...block} />
        </div>
      ))}
    </S.CanvasEditor>
  )
}

export default CanvasEditor

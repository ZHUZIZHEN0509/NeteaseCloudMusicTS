import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EmotionRadioWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useRenderRadioItem } from '@/hooks'

interface IProps {
  children?: ReactNode
  moreLink?: string
}

const EmotionRadio: FC<IProps> = (props) => {
  const { moreLink = '#' } = props
  return (
    <EmotionRadioWrapper>
      <NavHeaderV4 navTitle="情感·电台" moreLink={moreLink} />
      <div className="emotionRadioContent">{useRenderRadioItem(3)}</div>
    </EmotionRadioWrapper>
  )
}

export default memo(EmotionRadio)

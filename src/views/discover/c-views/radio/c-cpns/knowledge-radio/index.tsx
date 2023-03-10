import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { KnowledgeRadioWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useRenderRadioItem } from '@/hooks'

interface IProps {
  children?: ReactNode
  moreLink?: string
}

const KnowledgeRadio: FC<IProps> = (props) => {
  const { moreLink = '#' } = props
  return (
    <KnowledgeRadioWrapper>
      <NavHeaderV4 navTitle="知识·电台" moreLink={moreLink} />
      <div className="knowledgeRadioContent">{useRenderRadioItem(11)}</div>
    </KnowledgeRadioWrapper>
  )
}

export default memo(KnowledgeRadio)

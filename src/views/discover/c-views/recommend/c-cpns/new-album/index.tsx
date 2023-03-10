import React, { ElementRef, memo, useCallback, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import NavHeaderV1 from '@/components/nav-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'
import { Carousel } from 'antd'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
  const { albums = [] } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    shallowEqual
  )
  const navigate = useNavigate()

  const albumCarouselRef = useRef<ElementRef<typeof Carousel>>(null)

  function carouselLeft() {
    albumCarouselRef.current?.prev()
  }

  function carouselRight() {
    albumCarouselRef.current?.next()
  }

  //点击新碟上架页面跳转
  const newAlbumItemClick = useCallback((id: number) => {
    navigate(`/discover/albumList?id=${id}`, { replace: true })
  }, [])

  return (
    <NewAlbumWrapper>
      <NavHeaderV1
        title={'新碟上架'}
        hotLink="#/discover/album"
        moreLink={'/discover/album'}
      />
      <div className="newAlbumContent">
        <div className="sprite_02 btn leftBtn" onClick={carouselLeft}></div>
        <div className="albumCenter">
          <Carousel ref={albumCarouselRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="albumList">
                    {albums.length > 0 &&
                      albums
                        .slice(item * 5, (item + 1) * 5)
                        .map((albumsItem) => {
                          return (
                            <NewAlbumItem
                              key={albumsItem.id}
                              newAlbumItem={albumsItem}
                              newAlbumClick={newAlbumItemClick}
                            />
                          )
                        })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="sprite_02 btn rightBtn" onClick={carouselRight}></div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)

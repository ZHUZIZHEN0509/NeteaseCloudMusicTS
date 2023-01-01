import styled from 'styled-components'

export const NewAlbumItemWrapper = styled.div`
  .albumItemBox {
    width: 100px;
    .albumItemHeader {
      height: 100px;
      margin-bottom: 7px;
      position: relative;
      .albumImage {
        width: 100%;
        height: 100%;
      }
      .albumCover {
        width: 118px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        background-position: 0 -570px;
      }
      .albumPlay {
        display: none;
      }
      .bottomCover {
        position: absolute;
        bottom: -9px;
        width: 104px;
        height: 9px;
        background-position: 0 -819px;
        transform: rotate(180deg);
      }
      &:hover {
        .albumPlay {
          display: block;
          width: 22px;
          height: 22px;
          position: absolute;
          right: 5px;
          bottom: 5px;
          background-position: 0 -85px;
          cursor: pointer;
        }
      }
    }
    .albumItemFooter {
      font-size: ${(props) => props.theme.size.primarySize};
      font-family: Arial, Helvetica, sans-serif;
      .name {
        color: ${(props) => props.theme.color.secondColor};
        cursor: pointer;
        ${(props) => props.theme.mixin.textNowrap}
        :hover {
          text-decoration: underline;
        }
      }
      .footName {
        color: ${(props) => props.theme.color.threeColor};
        cursor: pointer;
        ${(props) => props.theme.mixin.textNowrap}
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const theme = {
  color: {
    primaryColor: '#C20C0C',
    secondColor: '#000000',
    threeColor: '#666666',
    fourColor: '#333333',
    fiveColor: '#ccc',
    sixColor: '#999999',
    sevenColor: '#e2e2e2'
  },
  size: {
    primarySize: '12px',
    secondSize: '14px',
    threeSize: '20px'
  },
  mixin: {
    wrapv1: `
    width: 1100px;
    margin: 0 auto;`,
    textNowrap: `
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `
  }
}

export default theme

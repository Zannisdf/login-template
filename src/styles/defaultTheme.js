const brandBlack = '#333'
const brandTranslucentBlack = 'rgba(0, 0, 0, 0.54)'
const brandWhite = '#fff'
const brandPrimary = '#3477C8'
const hoverPrimary = '#2F6BB4'
const outlinePrimary = '#17539C'
const brandPrimaryFont = "'Ubuntu', sans-serif;"

const defaultTheme = {
  brandBlack,
  brandTranslucentBlack,
  brandWhite,
  brandPrimaryFont,
  buttons: {
    primary: {
      bg: brandPrimary,
      color: brandWhite,
      hover: hoverPrimary,
      outline: outlinePrimary,
    },
  },
}

export default defaultTheme

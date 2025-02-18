const theme = {
  colors: {
    main: {
      default: '#E41359',
      hover: '#CA1B53',
      dark: '#73313D',
      light: '#FFDBE7',
      lighter: '#FDEEF3',
    },
    gray: [
      '#39486E', // 0
      '#4F5C7E',
      '#606C8B', // 2
      '#737E99',
      '#838DA5', // 4
      '#959DB3',
      '#A7AEC0', // 6
      '#BBC1CF',
      '#CBCFDB', // 8
      '#E4E7EE',
      '#EDEEF7', // 10
      '#FAFBFE',
    ],
    jsonVue: {
      string: '#86C3B8',
      keys: '#39486E',
      badgeBg: '#EDEEF7',
      badgeFg: '#82a0bc',
      keyNumber: '#39486E',
      arrows: '#E41359',
      integers: '#86C3B8',
    },
  },
  //      0, 1, 2, 3,  4,  5,  6,   7,   8
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakpoints: {
    large: '1440',
  },
}

export default theme

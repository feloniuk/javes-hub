const pxToRem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': pxToRem(768),
      'laptop': pxToRem(1024),
      'desktop': pxToRem(1440),
    },
    fontSize: {
      'h0-desktop': [pxToRem(100),  1.2],
      'h0-tablet': [pxToRem(80), 1.2],
      'h0-mobile': [pxToRem(64), 1.2],
      'h1-desktop': [pxToRem(64), 1.2],
      'h1-tablet': [pxToRem(56), 1.2],
      'h1-mobile': [pxToRem(40), 1.2],
      'h2-desktop': [pxToRem(48), 1.2],
      'h2-tablet': [pxToRem(40), 1.2],
      'h2-mobile': [pxToRem(32), 1.2],
      'h3-desktop': [pxToRem(40), 1.2],
      'h3-tablet': [pxToRem(32), 1.2],
      'h3-mobile': [pxToRem(28), 1.2],
      'h4-desktop': [pxToRem(32), 1.2],
      'h4-tablet': [pxToRem(28), 1.2],
      'h4-mobile': [pxToRem(24), 1.2],
      'h5-desktop': [pxToRem(24), 1.2],
      'body-xxl-desktop': [pxToRem(32), 1.3],
      'body-xl-desktop': [pxToRem(24), 1.5],
      'body-xl-tablet': [pxToRem(20), 1.5],
      'body-l-desktop': [pxToRem(18), 1.5],
      'body-l-mobile': [pxToRem(16), 1.5],
      'body-m-desktop': [pxToRem(16), 1.5],
      'body-m-mobile': [pxToRem(14), 1.5],
      'body-s-desktop': [pxToRem(14), 1.5],
      'body-xs-desktop': [pxToRem(12), 1.5],
    },
    colors: {
      accents: {
        'purple': "#8541FF",
        'purple-dark': "#452183",
        'red': "#F56C8F",
        'red-dark': "#EF7271",
        'orange': '#FBBE7E',
        'orange-dark': '#FF6E75',
        "green": "#6FCF97",
      },
      primary: {
        'white': '#FFFFFF',
        'black': '#000223',
      },
      transparent: 'transparent',
    }
  },
  plugins: [],
}

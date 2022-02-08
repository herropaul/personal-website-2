module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-seriff']
    },
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    animation: {
      float: 'float 3s infinite',
      refloat: 'refloat 3s infinite'
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      refloat: {
          '0%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
    },
    variants: {
      animation: ['responsive'],
      textColor: ['active'],
    }
  },
  plugins: []
}

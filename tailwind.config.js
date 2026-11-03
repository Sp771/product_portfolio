module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#7D2027',
        brand: '#673C34',
        flame: '#BF4A21',
        orange: '#CF5527',
        cream: '#FAE3B1',
        olive: '#998731',
        sky: '#5FA8C2',
        skytint: '#DCEEF4',
        skydeep: '#367489',
        mist: '#FBF0D6',
        'text-color': '#21243D',
        'accent-1': '#FF6464',
        'accent-2': '#EAEAEA',
        'accent-7': '#142850',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      fontFamily: {
        'sans': ['Heebo', 'system-ui'],
        'display': ['"Bricolage Grotesque"', 'Heebo', 'system-ui'],
        'body': ['Heebo'],
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}

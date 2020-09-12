module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge:
  {
    enabled: true,
    content:[
    './src/**/*.html',
    './src/**/*.ts',
    './projects/design/**/*.html',
    './projects/design/**/*.ts',
    './projects/shortcodes/**/*.html',
    './projects/shortcodes/**/*.ts',
  ]},
  theme: {
    extend: {
      colors: {
        blue: 'var(--orange)',
        'blue-opacity-10': 'rgba(var(--orange-rgb), 0.1)',
        cyan: 'var(--light-orange)',
        'cyan-opacity-10': 'rgba(var(--light-orange-rgb), 0.1)',
        'dark-blue': 'var(--dark-orange)',
        'dark-blue-opacity-10': 'rgba(var(--dark-orange-rgb), 0.1)',
        background: 'var(--background)',
        'background-opac': 'var(--background-opac)',
        'background-light': 'var(--background-light)',
        'background-shade': 'var(--background-shade)',
        color: 'var(--text)',
        'color-light': 'var(--text-light)',
        'color-shade': 'var(--text-shade)',
        tabs: 'var(--tabs)',
        danger: 'var(--danger)',
        code: 'var(--code)',
      },
      fontFamily: {
        sans: ['Noto Sans JP'],
      },
      inset: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      maxHeight: {
        '248': '248px',
        '384': '384px',
        '524': '524px',
      },
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      borderRadius: {
        xl: '22px',
      },
      minHeight: {
        18: '4.5rem',
        24: '6rem',
        80: '20rem',
      },
    },
    screens: {
      xx: '0px',
      xs: '256px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      dark: { raw: '(prefers-color-scheme: dark)' },
      light: { raw: '(prefers-color-scheme: light)' },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
};

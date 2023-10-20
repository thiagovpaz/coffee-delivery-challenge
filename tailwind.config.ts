import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: {
          900: '#C47F17',
          500: '#DBAC2C',
          100: '#F1E9C9',
        },
        purple: {
          900: '#4B2995',
          500: '#8047F8',
          100: '#EBE5F9',
        },
        gray: {
          900: '#272221',
          800: '#403937',
          700: '#574F4D',
          600: '#8D8686',
          500: '#D7D5D5',
          400: '#E6E5E5',
          300: '#EDEDED',
          200: '#F3F2F2',
          100: '#FAFAFA',
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        baloo_2: ['var(--font-baloo_2)'],
      },
    },
  },
  plugins: [],
};
export default config;

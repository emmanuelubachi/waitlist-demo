import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // screens: {
    //   '3xl': { max: '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   '2xl': { max: '1440px' },
    //   // => @media (max-width: 1440px) { ... }

    //   xl: { max: '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: '639px' }
    //   // => @media (max-width: 639px) { ... }
    // },

    extend: {
      padding: {
        'clamp_5-2': 'var(--clamp_5-2)',
        'clamp_4-1': 'var(--clamp_4-1)',
        section_card_offset: 'calc(var(--clamp_5-2) + var(--card-offset))'
      },
      margin: {
        card_offset: 'var(--card-offset)'
      },
      fontSize: {
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
        h4: 'var(--h4)',
        h5: 'var(--h5)',
        h6: 'var(--h6)',
        p: 'var(--p)'
      },
      gap: {
        container: 'var(--container-gap)',
        grid: 'var(--grid-gap)',
        content: 'var(--content-gap)'
      }
    }
  },
  plugins: []
}
export default config

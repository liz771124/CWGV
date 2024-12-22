/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '18px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '768',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px'
      }
    },
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans TC',
          '微軟正黑體',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji'
        ]
      },
      colors: {
        // gray: {
        //   ...colors.gray,
        //   100: 'var(--Gray-100)',
        //   300: 'var(--Gray-300)',
        //   400: 'var(--Gray-400)',
        //   500: 'var(--Gray-500)',
        //   600: 'var(--Gray-600)',
        //   700: 'var(--Gray-700)',
        //   900: 'var(--Gray-900)'
        // },

        // gray2: {
        //   100: '#000',
        //   200: '#e1e1e1',
        //   300: '#c9c9c9',
        //   400: '#a8a8a8',
        //   500: '#878787',
        //   600: '#676767',
        //   700: '#4c4c4c',
        //   800: '#363636',
        //   900: '#1f1f1f'
        // },

        'primary-50': 'rgba(var(--Primary-100), 0.05)',
        'primary-100': 'var(--Primary-100)',
        'primary-300': 'var(--Primary-300)',
        'primary-400': 'var(--Primary-400)',
        'primary-500': 'var(--Primary-500)',
        'primary-600': 'var(--Primary-600)',
        'primary-700': 'var(--Primary-700)',
        'primary-900': 'var(--Primary-900)',

        'secondary-100': 'var(--Secondary-100)',
        'secondary-300': 'var(--Secondary-300)',
        'secondary-500': 'var(--Secondary-500)',
        'secondary-600': 'var(--Secondary-600)',
        'secondary-700': 'var(--Secondary-700)',
        'secondary-900': 'var(--Secondary-900)',

        // 'success-100': 'var(--Success-100)',
        // 'success-200': 'var(--Success-300)',
        // 'success-400': 'var(--Success-400)',
        // 'success-500': 'var(--Success-500)',
        // 'success-600': 'var(--Success-600)',
        // 'success-700': 'var(--Success-700)',
        // 'success-900': 'var(--Success-900)',

        // 'worry-100': 'var(--Worry-100)',
        // 'worry-300': 'var(--Worry-300)',
        // 'worry-400': 'var(--Worry-400)',
        // 'worry-500': 'var(--Worry-500)',
        // 'worry-600': 'var(--Worry-600)',
        // 'worry-700': 'var(--Worry-700)',
        // 'worry-900': 'var(--Worry-900)',

        // 'info-100': 'var(--Info-100)',
        // 'info-300': 'var(--Info-300)',
        // 'info-400': 'var(--Info-400)',
        // 'info-500': 'var(--Info-500)',
        // 'info-600': 'var(--Info-600)',
        // 'info-700': 'var(--Info-700)',
        // 'info-900': 'var(--Info-900)',

        // 'danger-100': 'var(--Danger-100)',
        // 'danger-300': 'var(--Danger-300)',
        // 'danger-400': 'var(--Danger-400)',
        // 'danger-500': 'var(--Danger-500)',
        // 'danger-600': 'var(--Danger-600)',
        // 'danger-700': 'var(--Danger-700)',
        // 'danger-900': 'var(--Danger-900)',

        'gray2-100': 'var(--Gray-100)',
        'gray2-300': 'var(--Gray-300)',
        'gray2-400': 'var(--Gray-400)',
        'gray2-500': 'var(--Gray-500)',
        'gray2-600': 'var(--Gray-600)',
        'gray2-700': 'var(--Gray-700)',
        'gray2-900': 'var(--Gray-900)'

        // 'typography-100': 'var(--Typography-100)',
        // 'typography-200': 'var(--Typography-200)',
        // 'typography-300': 'var(--Typography-300)',
        // 'typography-400': 'var(--Typography-400)',
        // 'typography-500': 'var(--Typography-500)',
        // 'typography-link': 'var(--Typography-link)',
        // 'typography-money': 'var(--Typography-money)',

        // 'event-100': 'var(--Event-100)',
        // 'event-300': 'var(--Event-300)',
        // 'event-500': 'var(--Event-500)'
      },
      backgroundColor: (theme) => ({
        ...theme('colors')
      })
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
}

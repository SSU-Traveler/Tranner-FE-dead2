/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '/public/index.html'],
  theme: {
    extend: {
      colors: {
        button: {
          basic: '#0BCDFE',
          hover: '#2A92FE',
          selected: '#495BFF',
        },
        trip: {
          day1: '#E60100',
          day2: '#FF8B03',
          day3: '#FFF000',
          day4: '#028221',
          day5: '#014BFE',
          day6: '#000080',
          day7: '#790589',
          day8: '#FF9292',
          day9: '#FFC092',
          day10: '#FFF2AA',
          day11: '#ACEA92',
          day12: '#A8E1EC',
          day13: '#92A0E4',
          day14: '#C592E5',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // app/ ディレクトリ構成に移行した際は content のパスを更新すること。
  // パスが古いままだと purge が効かず未使用 CSS が大量に含まれる。
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // pages/ が残っている場合
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tambahkan jalur ini agar Next.js memindai semua komponen di src/app
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

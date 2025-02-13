/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js, jsx, ts, tsx}"],
    theme: {
        extend: {
            colors: {
                'black-rgba': 'rgba(217, 217, 217, 0.1)',
              },
        },
    },
    plugins: [],
};

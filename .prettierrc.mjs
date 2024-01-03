/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
        semi: false,
        arrowParens: 'avoid',
        printWidth: 100,
        jsxSingleQuote: true,
        astroAllowShorthand: true,
      },
    },
  ],
}

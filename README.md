# A Minimalist Photography Portfolio Site - [See It Here!](https://kam-lin.com)

Made for the photographer Kam Lin, this is a portfolio website showcasing a variety of her works. It includes interactive photo galleries, light and dark modes, and is fully responsive on mobile devices.

![Website Home Page](docs/home_page.png)

## Development

Developed using [React](https://react.dev/), this portfolio is built to be lightweight and dynamic, offering a pleasant experience for the user while being easily modifiable by the developer for future additions. The website is written [TypeScript](https://www.typescriptlang.org/) and built with [Vite](https://vitejs.dev/).

### Styling

Styling is done with [SCSS](https://sass-lang.com/) contained in [CSS Modules](https://github.com/css-modules/css-modules). Combining both the SCSS pre-processor with the flexibility of CSS modules leads to a much better developer experience and a smoother user experience on the website. Key colors and style variables are stored in the base style index to be used throughout the codebase to reduce repetition and ensure stylistic continuity between all elements, pages, and themes.

### Linting & Formatting

Linting is done with [ESLint](https://eslint.org/) while code formatting is done with [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/). These can be triggered by executing `npm run format`.

## Deployment

GitHub Pages is used for deploying the React app onto [kam-lin.com](https://kam-lin.com) through the use of the custom domain DNS feature.

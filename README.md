# Newshub for FAForever

This repository contains the source of a proposal for an alternative news hub for [FAForever](https://faforever.com/).

## Technologies

- [Jekyll](https://jekyllrb.com/) ([GitHub Pages](https://pages.github.com/)): Tooling to generate the site
  - [jekyll-feed](https://github.com/jekyll/jekyll-feed): Plugin that generates an Atom (RSS-like) feed of our content
  - [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from): Plugin that enables us to do page redirects
  - [jekyll-github-metadata](https://github.com/jekyll/github-metadata): Plugin that helps with exposing metadata of the GitHub repository
  - [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag): Plugin to help with Search Engine Optimalization (SEO)
  - [jekyll-paginate](https://github.com/jekyll/jekyll-paginate): Plugin to help with pagination of content
  - [jekyll-category-pages](https://github.com/field-theory/jekyll-category-pages): Plugin that generates pages of categories
  - [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap): Plugin that generates a sitemap for crawlers
  - [jekyll-transcode-image-filters](https://github.com/Garanas/jekyll-transcode-image-filters): Plugin to help with converting images to browser friendly formats
  - [jekyll-icalendar-feed](https://github.com/Garanas/jekyll-icalendar-feed): Plugin to help with generating an iCalendar (RFC5545) feed of our content

- [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API): A browser API that makes it easier to share content
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API): A browser API that makes it easier to copy content to the clipboard. This is used as a fallback if the Web Share API is not available.

### CI/CD

- [Node Package Manager](https://nodejs.org/en/download/package-manager)
- [Workbox](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/): Tooling to generate information required for a progressive webapp
- [Lighthouse](https://github.com/GoogleChrome/lighthouse): Tooling to measure website performance, is integrated in Chrome developer tools
  - [Lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci): Command line wrapper to make it easier to do automated testing on website performance

The following tooling helps us with reducing the bundle size.

- [Purge CSS](https://purgecss.com/): Tooling to remove unused CSS.
- [CSSNano](https://cssnano.github.io/cssnano/): Tooling to minify CSS
- [PostCSS](https://postcss.org/): Tooling to post process css (used by cssnano)
- [uglify-js](https://github.com/mishoo/UglifyJS): Tooling to minify JavaScript
- [html-minifier-terser](https://github.com/terser/html-minifier-terser): Tooling to minify HTML

## Branches

- `main`: The default branch.
- `deploy/gh-pages`: The source code that is to be deployed to GitHub Pages.

## Resources

- [Turning a Jekyll site into a Progressive Web App](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/)
- [Generating a site map](https://independent-software.com/generating-a-sitemap-xml-with-jekyll-without-a-plugin.html)
- [Simple cookie consent](https://jekyllcodex.org/without-plugin/cookie-consent/)
- [Jank-free page loading with media aspect ratios](https://blog.logrocket.com/jank-free-page-loading-with-media-aspect-ratios/)
- [Responsive Layouts Workshop by Kevin Powell](https://www.youtube.com/watch?v=S2XstSrGJOw)

### Additional tooling

- [Progressive Web App Builder](https://www.pwabuilder.com/)
- [Web app manifest generator](https://app-manifest.firebaseapp.com/)
- [SVG Icon Font generator](https://icomoon.io/app)
- [Favicon generator](https://realfavicongenerator.net/)

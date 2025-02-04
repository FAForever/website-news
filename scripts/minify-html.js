const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { minify } = require('html-minifier-terser');

(async () => {
    const configuration = {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: false,
        collapseWhitespace: true,
        conservativeCollapse: false,
        continueOnParseError: false,
        decodeEntities: true,
        minifyCSS: false,   // we process these separately
        minifyJS: false,    // we process these separately
        minifyURLs: false,
        preserveLineBreaks: false,
        processConditionalComments: false,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmptyElements: false,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: false,
        sortAttributes: false,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      };

    try {
        // Find all matching files
        const pattern = 'src/_site/**/*.html';
        const files = await glob(pattern);

        for (const file of files) {
            const inputPath = path.resolve(file);
            const outputPath = inputPath.replace(/\.html$/, '.html');

            try {
                const htmlContent = fs.readFileSync(inputPath, 'utf8');
                const minified = await minify(htmlContent, configuration);

                // Overwrite source file
                fs.writeFileSync(outputPath, minified, 'utf8');
                console.log(`Minified ${file} -> ${outputPath}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    } catch (err) {
        console.error('Error finding files:', err);
    }
})();
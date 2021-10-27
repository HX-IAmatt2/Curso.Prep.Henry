module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src");

      return {
        dir: {
          // input: "*.md",
          output: "_dist",
        },
      };
    };
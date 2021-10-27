module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src");

      return {
        dir: {
          includes: "/_src/layouts",
          output: "_dist",
        },
      };
    };
module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src/styles");
  eleventyConfig.addPassthroughCopy("logo.png");

      return {
        dir: {
          includes: "/_src/layouts",
          data: "/_src/data",
          output: "_dist",
        },
      };
    };
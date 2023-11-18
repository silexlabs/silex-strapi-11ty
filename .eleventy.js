module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setWatchThrottleWaitTime(500); // in milliseconds
};
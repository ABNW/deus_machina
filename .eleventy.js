module.exports = function(eleventyConfig) {

  //Filter for left or right based on odd even of number
  eleventyConfig.addLiquidFilter("leftORright", function(value){
    return value % 2 ? 'left' : 'right';
  });

  return  {
    dir: {
      input: "views",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    }
  }
};
module.exports = function(eleventyConfig) {

  //Filter for left or right based on odd even of number
  eleventyConfig.addLiquidFilter("leftORright", function(value){
    if(value % 2) {
      return 'left';
    } else {
      return 'right';
    }
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
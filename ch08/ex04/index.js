const obj = {
  om: function () {
    const nest = {
      nm: function () {
        // console.log("nm this:", this);
        // console.log("nm obj:", obj);
        // console.log("nm nest:", nest);
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        // console.log("arrow this:", this);
        // console.log("arrow obj:", obj);
        // console.log("arrow nest:", nest);
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();

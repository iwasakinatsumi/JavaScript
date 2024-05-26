export let object = {
  r: 30,
  theta: 30,

  x: 1,
  y: 2,

  get accessorProp() {},
  set accessorProp(value) {
    if (value == NaN) {
      return error;
    }
    this.x = value;
    this.y = value;
  },
};

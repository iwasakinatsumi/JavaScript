export let object = {
  r: 30,
  theta: 30,
};

Object.defineProperty(object, "x", {
  value: 1,
  writable: true,
  get() {
    return this.x;
  },
  set(value) {
    if (value == NaN) {
      return error;
    } else {
      this.x = value;
    }
  },
});

Object.defineProperty(object, "y", {
  value: 2,
  writable: true,
  get() {
    return this.y;
  },
  set(value) {
    if (value == NaN) {
      return error;
    } else {
      this.y = value;
    }
  },
});
